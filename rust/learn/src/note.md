### Notes
Rust has an entry point function called `main`. This is unlike javascript/python where the function needs to be called explicitly.

### Initialization
To initialize an end user appilcation using rust, using this command:
```
cargo init
```

To initialize a library that can be used in other projects, use this command:
```
cargo init --lib
```

### Run
To build (compile) the project locally, use this command:
```
cargo build
```

To build release version of the project, use this command:
```
cargo build --release
```

## Variables

### Integers
Data types for integers are as follows:
- i8: signed 8-bit integer
- i16: signed 16-bit integer
- i32: signed 32-bit integer
- u8: unsigned 8-bit integer
- u16: unsigned 16-bit integer
- u32: unsigned 32-bit integer
And so on...

## Stack / Heap
- Rust uses Stack for storing variables whose size is known at compile time. Stack offers fast allocation and deallocation.
- Heap is used to store data whose size can grow at runtime such as dynamic arrays (vectors) or strings.

### Stack frame
- Each function call gets its own stack frame. Each frame is pushed in the stack whenever a function is called.
- Variables that are used inside a function are stored in the corresponding stack frame.

For example, when a `String` is created, three variables are stored on Stack:
- Pointer to the first element
- Length of the string
- Capacity of the string
The actual string data is stored on the heap.

## Ownership

Here are the issues that can occur with memory management in C:
- Dangling pointer/NULL pointer error: A pointer points to a location in memory that has been deallocated.
- Double free error: We try to deallocate a memory that is already deallocated.

*Ownership* is a set of rules that governs how a Rust program manages memory. The Rust compiler runs a check on the code at compile time (which makes compilation quite slower) to enforce these rules. However, these rules don't slow down the program at runtime.
That is, *if Rust code compiles, it is guaranteed to be memory safe and there will be no dangling poitner errors*. Memory safe means that the heap memory will be cleaned up properly and no null-pointer errors will occur (Stack is anyway cleaned up automatically).

### Ownership Rules
Here are the rules:
- Each value in heap will have a variable that points to it (called owner).
- There can be only one owner at a time.
- If the owner changes, the previous owner will be invalidated.
- If the current owner goes out of scope, the data corresponding to the value will be deallocated.

For example, consider the following code:
```rust
let s1 = String::from("Hello");
let s2 = s1;

// println!("{}", s1); // Will throw an error
println!("{}", s2); // Will print "Hello"
```

Similarly, if we pass a variable (by reference) to a function, the ownership of the variable will be transferred to some variable in the stack frame of the function. So, the original variable will be invalidated. Example:
```rust
fn main() {
    let my_string = String::from("Hello");
    take_ownership(my_string);
    println!("{}", my_string); // Will throw an error
}

fn take_ownership(some_string: String) {
    println!("{}", some_string);
}
```

This can be fixed using the following code:

```rust
fn main() {
    let mut my_string = String::from("Hello"); // It has to be mutable since we can't be sure that the function won't change the value
    my_string = take_ownership(my_string);
    println!("{}", my_string);

    // This is also fine:
    let my_string = String::from("Hello");
    let my_string_1 = take_ownership(my_string);
    println!("{}", my_string_1);
}

fn take_ownership(some_string: String) -> String {
    println!("{}", some_string);
    return some_string;
}
```
But this is very weird code. Therefore, we want a mechanism to get back the ownership of the variable.

## Borrowing and references
Now, the variable can have one of the following situations:
![Borrowing and references](../Screenshot%202024-07-22%20201502.png)

References are used to refer to a value without taking ownership of it. For example:
```rust
fn main() {
    let s1 = String::from("Hello");
    let s2 = &s1; // s2 is a reference to s1 and not an owner

    println!("{}", s1);
    println!("{}", s2);
}
```

Similarly, this code will also work:
```rust
fn main() {
    let s1 = String::from("Hello");

    borrow_variable(&s1); // Pass a reference to s1

    println!("{}", s1); // This is valid because ownership was not transferred
}

fn borrow_variable(some_string: &String) {
    println!("{}", some_string); // some_string is borrowed and not owned
}
```

But a borrower can't update the value of the variable unless specified. For example:
```rust
fn main() {
    let mut s1 = String::from("Hello");

    update_str(&s1);

    println!("{}", s1);
}

fn update_str(some_string: &String) {
    some_string.push_str(" World"); // This will throw an error because the borrower doesn't borrow a mutable reference to the variable
}
```
To make it work, we need to borrow a mutable reference:
```rust
fn main() {
    let mut s1 = String::from("Hello");

    update_str(&mut s1);

    println!("{}", s1);
}

fn update_str(some_string: &mut String) {
    some_string.push_str(" World");
}
```

**Note:** There can be only ONE mutable reference to a variable. Once there is a mutable reference, there CANNOT be any other mutable or immutable reference to the variable.
Example:
```rust
fn main() {
    let mut s1 = String::from("Hello");

    let s2 = &mut s1; // This works
    println!("{}", s2);
    let s3 = &mut s1; // Throws an error because s1 already has a mutable reference
    let s4 = &s1; // Throws an error because s1 already has a mutable reference
    // Note: The above 2 lines will throw an error ONLY when s2 will be used somewhere in the code
    // Otherwise, they won't throw an error
}
```
Reason:
- If someone makes an `immutable reference`, they don't expect the value to change suddenly. Therefore, once an immutable reference is made, any other reference (mutable or immutable) will be invalid.
- If more than one `mutable reference` exists, then it can lead to a race condition and sychronization issues.

Example:
```rust
fn main() {
    let mut s1 = String::from("Hello");

    update_str(&mut s1);

    update_str(&mut s1); // This will work because the previous mutable reference is gone after the previous function call

    println!("{}", s1);
}

fn update_str(some_string: &mut String) {
    some_string.push_str(" World");
}
```

