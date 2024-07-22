fn main() {
    let mut s1 = String::from("Hello");

    update_str(&mut s1);

    update_str(&mut s1);

    println!("{}", s1);
}

fn update_str(some_string: &mut String) {
    some_string.push_str(" World");
}