const byteSize = (str) => {
  
	
     return new Blob([str]).size;
}

console.log(byteSize("hello world")); // Expected output: 11
console.log(byteSize("안녕하세요")); // Expected output: 15
console.log(byteSize("")); // 


};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
