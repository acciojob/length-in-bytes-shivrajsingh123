const byteSize = (str) => {
  
	
    return new Blob([str]).size;
}

// Example test cases


};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
