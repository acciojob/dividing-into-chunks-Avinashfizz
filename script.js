const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
   let A =[];
	let Ans =[];
	let i = 0;
	let j = 0;
	let sum = 0;
	while(j<arr.length){
		if(sum+arr[j]<=n){
			
			A.push(arr[j]);
			sum+=arr[j];
	        j++;
		}else{
			Ans[i]=A;
			i++;
			A =[];
			A.push(arr[j]);
			sum=arr[j];
			j++;
		}
		 Ans.push(A);
		
	}
	
	return Ans;
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n))); 
