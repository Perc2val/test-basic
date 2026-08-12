import { capitalize, reverseString, calculator, ceasarCipher } from "./sum";


test("capitalize a string", ()=>{
    expect(capitalize("abcd")).toBe("ABCD")
});

test("capitalize another string", ()=>{
    expect(capitalize("dcba")).toBe("DCBA")
});

test("capitalize another string", ()=>{
    expect(capitalize("DCab")).toBe("DCAB")
});


test("reverse a string", ()=>{
    expect(reverseString("abcd")).toBe("dcba")
});

test("reverse another string", ()=>{
    expect(reverseString("dcba")).toBe("abcd")
});

test("calculator sum of two numbers", ()=>{
    expect(calculator.sum(2, 5)).toBe(7)
})

test("calculator substract two numbers", ()=>{
    expect(calculator.substract(10, 5)).toBe(5)
})

test("calculator multiply two numbers", ()=>{
    expect(calculator.multiply(10, 5)).toBe(50)
})

test("calculator divide two numbers", ()=>{
    expect(calculator.divide(10, 5)).toBe(2)
})

test("ceasarCipher shift", ()=>{
    expect(ceasarCipher("xyz", 3)).toBe("abc");
})

test("ceaserCipher shift 2", ()=>{
    expect(ceasarCipher("HeLLo", 3)).toBe("KhOOr")
})

test("ceaserCipher shift 3", ()=>{
    expect(ceasarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})