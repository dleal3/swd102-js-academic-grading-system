window.onload=function(){

	var button = document.querySelector(".button");
	button.addEventListener("click", calGrade);

	function calGrade(){
		var grades = document.querySelector("#grades").value;
		grades = grades.trim();
		grades = grades.split(" ");
		var message = '';

		for (var i in grades){
			var letterGrade = grades[i];
			var grade = '';

			console.log('grades.length' + grades.length);
			console.log('letterGrade.length '+ letterGrade.length);

			if ((grades.length == 1) && (letterGrade.length == 0)) { // The pressed the shift key or spacebar, just ignore...
					// break;
			} else if (isNaN(letterGrade) && (letterGrade.length > 0)) { // Test for letters like "A" but ignore actual "NaN" 
				message = "<strong>ERROR</strong> - Please only enter numbers."; 
					break;
			} else if (letterGrade < 0) {
				message = "<strong>ERROR</strong> - Valid grades are 0 - 100.";
					break;
			} else if ((letterGrade < 60) && (letterGrade >= 0)) {
				grade = "F";
			} else if (letterGrade < 70) {
				grade = "D";
			} else if (letterGrade < 80) {
				grade = "C";
			} else if (letterGrade < 90) {
				grade = "B";
			} else if (letterGrade <= 100) {
				grade = "A";
			} else if (letterGrade > 100) {
				message = "<strong>ERROR</strong> - Valid grades are 0 - 100.";
					break;
			}
			message += grade + " ";
				
		} // end loop through array...
			var letter = document.querySelector("#letter").innerHTML = message;
			// average calculation.
			var avgMarks = 0;
			for( var i = 0; i < grades.length; i++){
				avgMarks += parseInt(grades[i]);
				var average = avgMarks / grades.length;
			}
			console.log(average);
			document.querySelector("#average").innerHTML = average;
	}
}
