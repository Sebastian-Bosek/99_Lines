let friends = ["Andrew", "James", "Kyle", "Dave", "Michael"];

for (let j = 0; j < friends.length; j++) {

    console.log(friends[j] + ":");

    for (i = 99; i > 1; i--) {

        if (i > 2) {
            console.log(parseInt(i) + " lines of code in the file, " + parseInt(i) + " lines of code; " + friends[j] + " stikes one out, clears it all out, " + parseInt(i - 1) + " lines of code in the file");
        }

        else if (i === 2) {
            console.log(parseInt(i) + " lines of code in the file, " + parseInt(i) + " lines of code; " + friends[j] + " stikes one out, clears it all out, " + parseInt(i - 1) + " line of code in the file");
        }
    }

    if (i === 1) {
        console.log(i + " line of code in the file, " + i + " line of code; " + friends[j] + " stikes one out, clears it all out, no more lines of code in the file");
    }
}