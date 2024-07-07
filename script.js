let submitCount = 0;

function addData() {
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;
    const errorContainer = document.getElementById('error-container');

    // Clear any previous error messages
    errorContainer.innerHTML = '';

    // Check if either of the input boxes is empty
    if (!text1 || !text2) {
        errorContainer.innerHTML = 'Both fields are required!';
        return;
    }

    submitCount += 1;

    const paragraph = "As a passionate learner, I am always eager to explore new skills, broaden my knowledge, and gain diverse experiences. Transitioning from a student with basic coding knowledge to a Computer Science undergraduate with a CGPA of 8.06, my curiosity is piqued by innovation, experimentation, and exploration. My primary focus lies in the developmental zone, with a keen interest in areas like cloud computing. Beyond the tech realm, I find solace in traveling, listening to music, and painting, which serve as my perfect escape.";

    if (submitCount === 1) {
        // Display the predefined paragraph in the first data container
        document.getElementById('data1').innerHTML = paragraph;
        document.getElementById('image1').innerHTML = '<img src="images/img2.png" alt="Image 1" style="width:100%;">';

        // Display the first data container
        document.getElementById('data-container').style.display = 'flex';
    } else if (submitCount === 2) {
        // Update the content of the second data container
        document.getElementById('image2').innerHTML = '<img src="images/img1.jpg" alt="Image 2" style="width:100%;">';
        document.getElementById('data2').innerHTML = paragraph;

        // Display the second data container
        document.getElementById('data-container2').style.display = 'flex';
    }
}
