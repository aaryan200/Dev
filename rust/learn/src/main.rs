fn main() {
    let is_male: bool = false;
    let above_18: bool = true;
    
    if is_male {
        println!("You are male");
    }
    else {
        println!("You are not male");
    }

    if above_18 {
        println!("You are above 18");
    }
    else if !above_18 {
        println!("You are not above 18")
    }

    let greeting = String::from("hello world");
    println!("{}", greeting);

    let x: i32 = -1;
    let formatted_string = format!("x = {}", x);
    println!("{}", formatted_string);

    let ind: usize = 1;

    let char_1 = greeting.chars().nth(ind);

    // Won't work: println!("{}", char_1);
    // match char_1 {
    //     Some(c) => println!("{}", c),
    //     None => println!("No character at {}", ind),
    // }

    println!("{}", char_1.unwrap()); // Will throw runtime error if index is out of range

    // For loop
    for i in 0..10 {
        if i != 9 {
            print!("{} ", i);
        } else {
            println!("{}", i);
        }
    }
    
    let a: i32 = 1;
    let b: i32 = -1;
    let c: i32 = do_sum(a, b);

    println!("{} + {} = {}", a, b, c);

    // update_string();

    let mut my_string = String::from("Hello");
    my_string = take_ownership(my_string);
    println!("{}", my_string);

}

// You need to specify the return type
fn do_sum(i:i32, j:i32) -> i32 {
    return i + j;
}

fn update_string() {
    let mut s = String::from("Initial string");
    println!("Before update: {}", s);
    println!("Capacity: {}, Length: {}, Pointer: {:p}", s.capacity(), s.len(), s.as_ptr());

    for _i in 0..10 {
        s.push_str(" and some additional text");
        println!("After update: {}", s);
        println!("Capacity: {}, Length: {}, Pointer: {:p}", s.capacity(), s.len(), s.as_ptr());
    }
}

fn take_ownership(some_string: String) -> String {
    println!("{}", some_string);
    return some_string;
}