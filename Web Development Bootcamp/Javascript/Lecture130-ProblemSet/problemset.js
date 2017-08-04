

// Reverse Items 
var items = [1,2,3,4];
items = ["a","b","c","d"];
reverse(items)


function reverse(list)
{
	for(var i = list.length; i >= 0; i--){
		console.log(list[i]);
	}
}




//----------------------------------------------------
//Uniform Problem 
	var list = [1,1,1,1];
	// var list = [2,1,1,1];
	// var list = ["a","b","p"];
	// var list = ["b","b","b"];

	var firstitem = list.shift();


	var result = false; 


	list.forEach(function(item){

		if(item !== firstitem)
			result = false;
		else if(item === firstitem){
			result = true; 
		}

	});

	console.log("The result of isUniform is " + result); 



//----------------------------------------------------
//Sum Problem 


	// // var sumArrayList = [1,2,3];
	var sumArrayList = [10,3,10,4];
	// var sumArrayList = [-5,100];
	// var sum  = 0; 
	sumArrayList.forEach(getSum);

	function getSum(item)
	{
		sum += item;
	}

	console.log("the sum is " + sum);






//----------------------------------------------------
//Max Problem 

	// better algorithm = to sort first take the last item n log n time. 
	// var maxArray = [1,2,3];
	// var maxArray = [10,3,10,4];
	var maxArray = [-5,100];
	var highest = maxArray.shift(); // first item

	console.log("The max is "+ getMax(maxArray, highest));





	function getMax(list, highest)
	{

		for(var i = 0; i < list.length; i++)
		{
			if(list[i] > highest)
					highest = list[i];

		}
		return highest;
		
	}


