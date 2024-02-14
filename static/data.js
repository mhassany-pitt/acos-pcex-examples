window.pcex_example = {
  "id": "392a8e1c-dd83-416c-b3c8-45ec4c45c662",
  "language": "JAVA",
  "activityName": "arrays2d.j_print_medals",
  "activityGoals": [{
    "id": "bbe5a3a6-d4f0-41e0-ad48-90045fe0f3c2",
    "name": "Printing Table of Medal Winner Counts with Row Totals",
    "order": 0,
    "language": "JAVA",
    "activityName": "arrays2d.j_print_medals",
    "fileName": "JPrintMedalsRowTotal.java",
    "goalDescription": "Assume that we have an array of countries that stores the names of the seven countries that participated in the Skating competitions at the Winter Olympic. We also have a 7x3 matrix that stores the number of medals that these seven countries won. This matrix looks like as follows:\\n{ {1, 0, 1 },\\n { 1, 1, 0 },\\n ...}\\nThe first, second, and third numbers within a row i represent the number of Gold, Silver, and Bronze medals won by the country that is at the index i of the array of countries.\\nConstruct a program that takes this matrix and the array of countries, and prints a table of medal counts with row total that shows the number of Gold, Silver, Bronze, and Total medals for each of the countries that participated in the competition. The output table should look like as follows:\\n    Country    Gold  Silver  Bronze   Total\\n     Canada        1       0       1            2\\n        China        1       1       0            2\\n       ...\\n",
    "correctOutput": "Name  G  S  B All\n CAN  1  0  1  2\n CHN  1  1  0  2\n GER  0  0  1  1\n KOR  1  0  0  1\n JPN  0  1  1  2\n RUS  0  1  1  2\n USA  1  1  0  2\n",
    "userInputList": [],
    "userInput": "",
    "lineList": [{
      "id": "b8d3daf3-c5e6-4b18-964e-3ad9ac7b16e3",
      "number": 1,
      "content": "public class JPrintMedalsRowTotal {",
      "commentList": [],
      "indentLevel": 0
    }, {
      "id": "8848f4e3-b22b-4588-99c4-31020eae08ab",
      "number": 2,
      "content": "\tpublic static void main(String[] args) {",
      "commentList": [],
      "indentLevel": 1
    }, {
      "id": "8eca6132-6d53-4b34-bc95-e506abbcca62",
      "number": 3,
      "content": "\t\t//Step 1: Define an array of countries",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "c52f4be9-69a0-45be-8be1-06f8b927029c",
      "number": 4,
      "content": "\t\tString[] countries =",
      "commentList": ["We define array countries of type string to hold the names of seven countries. We initialize the array by separating elements with a comma and enclosing the collection in braces { }."],
      "indentLevel": 2
    }, {
      "id": "6c5bdf23-34ce-400b-918c-a684ac5c29eb",
      "number": 5,
      "content": "\t\t\t{",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "06d3ce93-7cd8-479d-a641-756955b4707e",
      "number": 6,
      "content": "\t\t\t\t\t\"CAN\",",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "6a070531-7b0a-4fd5-941b-6d5da2cddad0",
      "number": 7,
      "content": "\t\t\t\t\t\"CHN\",",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "12e07cfb-7b66-4218-879c-b44cd57aec3b",
      "number": 8,
      "content": "\t\t\t\t\t\"GER\",",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "89f5b19a-5b7c-41d5-b074-56174486adcd",
      "number": 9,
      "content": "\t\t\t\t\t\"KOR\",",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "abc40646-8106-46b7-b25f-4c73276d4971",
      "number": 10,
      "content": "\t\t\t\t\t\"JPN\",",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "606042ea-a4aa-4e37-8193-db9729598789",
      "number": 11,
      "content": "\t\t\t\t\t\"RUS\",",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "31fb297e-57c5-45b9-be4b-7bb8acfd692a",
      "number": 12,
      "content": "\t\t\t\t\t\"USA\"",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "3db1ea2f-b1fd-437a-aefe-bd24a77f7692",
      "number": 13,
      "content": "\t\t\t};",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "f76215a6-ba22-4484-956f-a8ddcba9f12f",
      "number": 14,
      "content": "\t\t//Step 2: Define a 7x3 matrix that stores the number of medals the countries won",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "99500dcd-5260-4378-8ef4-06d62992cb19",
      "number": 15,
      "content": "\t\tint[][] medalCounts =",
      "commentList": ["We need to create the matrix of medal counts. To do this, we use a two-dimensional array (an array of arrays) where each row corresponds to the gold, silver, and bronze medals won by one country. This statement creates a 7x3 two-dimensional array called medalCounts. Each row of the matrix corresponds to the medal counts for the corresponding country in the array of countries. The first, second, and third numbers within a row represent the number of Gold, Silver, and Bronze medals won by the corresponding country in that row.", "Note that arrays can naturally span multiple lines if we want them to because they are contained by braces."],
      "indentLevel": 2
    }, {
      "id": "d59799e1-487c-405a-98bc-31e9efa09f9e",
      "number": 16,
      "content": "\t\t\t{",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "052afa27-1262-4600-8700-5d1a5567d1d8",
      "number": 17,
      "content": "\t\t\t\t\t{ 1, 0, 1 },",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "58c3b298-ca17-4d87-92e4-757b164767e5",
      "number": 18,
      "content": "\t\t\t\t\t{ 1, 1, 0 },",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "8cf529e7-90f4-4b27-917c-1c8acdd08231",
      "number": 19,
      "content": "\t\t\t\t\t{ 0, 0, 1 },",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "f1bbdeef-0f07-4e55-82bf-8cc033df6c98",
      "number": 20,
      "content": "\t\t\t\t\t{ 1, 0, 0 },",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "7526f3ec-cfca-4f56-b525-3e33bc310665",
      "number": 21,
      "content": "\t\t\t\t\t{ 0, 1, 1 },",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "19b5342b-af78-4379-b92d-a03e5ed7a31e",
      "number": 22,
      "content": "\t\t\t\t\t{ 0, 1, 1 },",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "09232692-18c0-4672-af60-4080c5d7dd61",
      "number": 23,
      "content": "\t\t\t\t\t{ 1, 1, 0 }",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "2eec72c3-04a8-43b4-87f9-58d9bf709b6f",
      "number": 24,
      "content": "\t\t\t};",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "07df8b03-05c1-4070-a447-ba90fbfa7ffd",
      "number": 25,
      "content": "\t\t//Step 3: Print the header of the output table",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "e298a51d-d6d7-4320-9ca9-2ce846853e5e",
      "number": 26,
      "content": "\t\tSystem.out.printf(\"%4s%3s%3s%3s%4s\\n\",\"Name\", \"G\", \"S\", \"B\", \"All\");",
      "commentList": ["We want to print a header for the table of medal winner counts. The columns of the table from left to right represent the country, the number of gold, silver, and bronze medals the country won, and finally, the row total that is the total medals the country won. We want to format the table so that all values are right-aligned with sufficient spacing between columns. For this purpose, we call printf method.<br>Here, we use %4s to right-justify the first string argument of the format string in a field that is 4-characters wide, and %3s/%4s to right-justify each remaining string arguments in a field that is 3-characters/4-characters wide .", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method. The new line character at the end of the format string will add an end-of-line character at the end of the formatted text. This is what we need because we finished printing data of the table header and we want to start a new line.", "Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (s for strings)."],
      "indentLevel": 2
    }, {
      "id": "4bc89961-9b5e-4189-a9ae-82e009c56c27",
      "number": 27,
      "content": "\t\t//Step 4: Iterate through the rows in the medal counts matrix",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "09ec8cfa-22a3-4460-82b4-5d848d522b3f",
      "number": 28,
      "content": "\t\tfor (int i = 0; i < countries.length; i++) {",
      "commentList": ["We need to process the medal counts data and print medal counts and the total number of medals won for each country (row totals). This data, that is stored in medalCounts, is a two-dimensional array; therefore, we need to use nested for loops to process all of its elements and print the table. This statement is the outer for loop in the nested loop and it processes the data stored in medalCounts row by row.", "To iterate over the rows in the medalCounts, we need the indexes to start at 0 with every integer number up to but not including the number of rows.", "In the first part of the loop header, we define a control variable i and initialize it to 0. In the second part of the loop header, we test whether the control variable has reached the termination threshold. The loop is repeated if the control variable is less than the number of elements in the array countries and terminates when the control variable reaches the number of elements in the array countries. In the third part of the loop header, we increment the control variable by 1 after each iteration of the loop.", "Note that the first part is executed once before the loop starts, the second part is executed before each iteration, and the third part is executed after each iteration of the loop.<br><br>Also, note that the increment operator (++) adds 1 to the value of variable i and the result is stored back into the variable i. Therefore, it is functionally equivalent to the statement i = i + 1."],
      "indentLevel": 2
    }, {
      "id": "a7606001-f178-40c5-90b5-1726e74cffcb",
      "number": 29,
      "content": "\t\t\t//Step 4.1: Print the name of the country at row i",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "782e0d68-1783-4817-91e8-f0d578ce2a80",
      "number": 30,
      "content": "\t\t\tSystem.out.printf(\"%4s\", countries[i]);",
      "commentList": ["We want to print the name of the country at row i. We also want to format the table row using the same format that we applied to the table header. So, similar to printing the table header, we call printf method.<br>We use %4s to right-justify the name of the country at row i (which is stored at countries[i]) in a field that is 4-characters wide.", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method.", "Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (s for strings)."],
      "indentLevel": 3
    }, {
      "id": "ee8dcf44-444b-45f8-99bf-0cabe76d783b",
      "number": 31,
      "content": "\t\t\t//Step 4.2: Initialize the variable that we need to store the row total for row i",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "39f8b936-e0a4-41e7-84eb-4bec878469f1",
      "number": 32,
      "content": "\t\t\tint rowTotal = 0;",
      "commentList": ["We need variable rowTotal to compute the total number of medals won by the country at row i of the matrix. We need to set it to 0 every time that we want to process a row and compute the row total.", "Note that this statement cannot be placed inside the inner loop because in that case in every iteration of the inner loop variable rowTotal would be set to 0 and that means that row total would always be equal to the number of bronze medals no matter what the remaining medal counts are. We cannot place this statement outside the outer loop either because in that case total would show the sum of the row totals in each row and all its preceding rows. Therefore, the only place that we could place this statement is in the outer loop body before reaching to the inner loop."],
      "indentLevel": 3
    }, {
      "id": "4cf5c66a-9ab5-4aab-b348-f76cddd1dfef",
      "number": 33,
      "content": "\t\t    //Step 4.3: Iterate through the columns of the medals counts matrix",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "44756433-7132-4304-b69c-0929afd27035",
      "number": 34,
      "content": "\t\t\tfor (int j = 0; j < medalCounts[0].length; j++) {",
      "commentList": ["This statement is the inner loop of the nested loop. It processes the elements within the row i where i is the row index in the medalCounts that changes after each iteration of the outer loop. To iterate over the individual elements in each row (i.e., iterating over the columns within a row) in the medalCounts, we need the indexes to start at 0 with every integer number up to but not including the number of columns.", "In the first part of the loop header, we define a control variable j and initialize it to 0. In the second part of the loop header, we test whether the control variable has reached the termination threshold. The loop is repeated if the control variable is less than the number of columns in the medalCounts and terminates when the control variable reaches the number of columns in the array medalCounts. We get the number of columns in the medalCounts by calling medalCounts[0].length. In the third part of the loop header, we increment the control variable by 1 after each iteration of the loop.", "Note that the first part is executed once before the loop starts, the second part is executed before each iteration, and the third part is executed after each iteration of the loop.<br><br>Also, note that the increment operator (++) adds 1 to the value of variable j and the result is stored back into the variable j. Therefore, it is functionally equivalent to the statement j = j + 1.", "Finally, note that the name that we choose for the index in the inner loop should be different from the index name in the outer for loop. Here, we choose i for the row index and j for the column index."],
      "indentLevel": 3
    }, {
      "id": "6f7cf8cf-c9b9-4307-8950-3f6ba7dc976f",
      "number": 35,
      "content": "\t\t\t\t//Step 4.3.1: Print the the number of medals at row i and column j of the matrix",
      "commentList": [],
      "indentLevel": 4
    }, {
      "id": "a464a023-77f5-4a15-b226-101a38ed986a",
      "number": 36,
      "content": "\t\t\t\tSystem.out.printf(\"%3d\", medalCounts[i][j]);",
      "commentList": ["We want to print the number of the medals at row i and column j of the the matrix. We also want to format the table row using the same format that we applied to the table header. So, similar to printing the table header, we call printf method.<br>We use %3d to right-justify the number of medals in a field that is 3-characters wide", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method. Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (d for decimals)."],
      "indentLevel": 4
    }, {
      "id": "76d44f26-755b-47a7-83ad-71abbf35a330",
      "number": 37,
      "content": "\t\t\t\t//Step 4.3.2: Update the row total for row i ",
      "commentList": [],
      "indentLevel": 4
    }, {
      "id": "2feac9f3-d0c5-4483-b2c6-b88424d929c7",
      "number": 38,
      "content": "\t\t\t\trowTotal = rowTotal + medalCounts[i][j];",
      "commentList": ["We need to accumulate the number of different medals (gold, silver, bronze) won by the country at row i. So, in each iteration of the inner loop, the specified element in row i and column j of the medalCounts is added to and stored back into the variable rowTotal.", "The += operator adds the value of the element in row i and column j of the medalCounts to the value of the variable rowTotal and the result is stored in the variable rowTotal. Thus, this statement is equivalent to the statement rowTotal = rowTotal + medalCounts[i][j]."],
      "indentLevel": 4
    }, {
      "id": "86d06aff-208f-4ef3-a3bc-c609a701e8a8",
      "number": 39,
      "content": "\t\t\t}",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "32df244d-2ec7-4eed-9f0c-7625b60dfe57",
      "number": 40,
      "content": "\t\t\t//Step 4.4: Print the row total for row i of the output table",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "4dc7be6e-a21a-4897-977a-57357eaf9929",
      "number": 41,
      "content": "\t\t\tSystem.out.printf(\"%3d\\n\", rowTotal);",
      "commentList": ["We want to print the row total that is the total number of the medals won by the country at row i. We also want to format the table row using the same format that we applied to the table header. So, similar to printing the table header, we call printf method.<br>We use %3d to right-justify the row total in a field that is 3-characters wide.", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method.  The new line character at the end of the format string will add an end-of-line character at the end of the formatted text. This is what we need because we finished printing data of the row i of the matrix and we want to start a new line.", "Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (d for decimals). An error will occur if the argument is not a decimal number, for instance, if the argument is a string."],
      "indentLevel": 3
    }, {
      "id": "4436837c-ecc0-4f03-8fa7-d07d9557ee96",
      "number": 42,
      "content": "\t\t}",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "0f04c6d0-edf6-47ce-8958-912a34f22a8a",
      "number": 43,
      "content": "\t}",
      "commentList": [],
      "indentLevel": 1
    }, {
      "id": "60ac3b3e-e35c-4f80-ae12-bfaf1215d9ac",
      "number": 44,
      "content": "}",
      "commentList": [],
      "indentLevel": 0
    }],
    "distractorList": [{
      "id": "ecc14044-e482-4b84-a4a6-5299a4fde96d",
      "line": {
        "id": "0c698929-6ce0-447f-9d09-9a0b1750e991",
        "number": 0,
        "content": "for (int i = 1; i <= countries.length; i++) {",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }, {
      "id": "890496b8-6f6c-4a82-af0e-5e1e621456e6",
      "line": {
        "id": "568c3634-94d7-4986-9180-34811b1fce20",
        "number": 0,
        "content": "for (int i = 0; i < medalCounts[0].length; i++) {",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }, {
      "id": "2a87ee1b-2885-41d7-87c5-fec6a2c2155f",
      "line": {
        "id": "b6c1f671-3c18-413c-afcd-ca909ac38b4e",
        "number": 0,
        "content": "for (int j = 0; j <= i; j++) {",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }, {
      "id": "43ea3680-5746-4863-8572-75db23231af2",
      "line": {
        "id": "e526b619-acef-4f3c-b518-1ce152f44031",
        "number": 0,
        "content": "for (int j = 1; j <= countries.length; j+=i) {",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }, {
      "id": "38821d61-c0e5-4266-8837-98ab5139c5d4",
      "line": {
        "id": "796076c1-1189-425d-9911-282f19ae2e9a",
        "number": 0,
        "content": "for (int j = 0; j <= countries.length; j++) {",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }],
    "blankLineList": [{
      "id": "54db0deb-a907-4d66-90e3-e0f23fc356b1",
      "line": {
        "id": "09ec8cfa-22a3-4460-82b4-5d848d522b3f",
        "number": 28,
        "content": "\t\tfor (int i = 0; i < countries.length; i++) {",
        "commentList": ["We need to process the medal counts data and print medal counts and the total number of medals won for each country (row totals). This data, that is stored in medalCounts, is a two-dimensional array; therefore, we need to use nested for loops to process all of its elements and print the table. This statement is the outer for loop in the nested loop and it processes the data stored in medalCounts row by row.", "To iterate over the rows in the medalCounts, we need the indexes to start at 0 with every integer number up to but not including the number of rows.", "In the first part of the loop header, we define a control variable i and initialize it to 0. In the second part of the loop header, we test whether the control variable has reached the termination threshold. The loop is repeated if the control variable is less than the number of elements in the array countries and terminates when the control variable reaches the number of elements in the array countries. In the third part of the loop header, we increment the control variable by 1 after each iteration of the loop.", "Note that the first part is executed once before the loop starts, the second part is executed before each iteration, and the third part is executed after each iteration of the loop.<br><br>Also, note that the increment operator (++) adds 1 to the value of variable i and the result is stored back into the variable i. Therefore, it is functionally equivalent to the statement i = i + 1."],
        "indentLevel": 2
      },
      "helpList": ["We need to process the medal counts data and print medal counts and the total number of medals won for each country (row totals). This data, that is stored in medalCounts, is a two-dimensional array; therefore, we need to use nested for loops to process all of its elements and print the table. This statement is the outer for loop in the nested loop and it processes the data stored in medalCounts row by row.", "To iterate over the rows in the medalCounts, we need the indexes to start at 0 with every integer number up to but not including the number of rows.", "In the first part of the loop header, we define a control variable i and initialize it to 0. In the second part of the loop header, we test whether the control variable has reached the termination threshold. The loop is repeated if the control variable is less than the number of elements in the array countries and terminates when the control variable reaches the number of elements in the array countries. In the third part of the loop header, we increment the control variable by 1 after each iteration of the loop.", "Note that the first part is executed once before the loop starts, the second part is executed before each iteration, and the third part is executed after each iteration of the loop.<br><br>Also, note that the increment operator (++) adds 1 to the value of variable i and the result is stored back into the variable i. Therefore, it is functionally equivalent to the statement i = i + 1."]
    }, {
      "id": "9f461d34-8360-4177-8716-8b4244d8acb7",
      "line": {
        "id": "44756433-7132-4304-b69c-0929afd27035",
        "number": 34,
        "content": "\t\t\tfor (int j = 0; j < medalCounts[0].length; j++) {",
        "commentList": ["This statement is the inner loop of the nested loop. It processes the elements within the row i where i is the row index in the medalCounts that changes after each iteration of the outer loop. To iterate over the individual elements in each row (i.e., iterating over the columns within a row) in the medalCounts, we need the indexes to start at 0 with every integer number up to but not including the number of columns.", "In the first part of the loop header, we define a control variable j and initialize it to 0. In the second part of the loop header, we test whether the control variable has reached the termination threshold. The loop is repeated if the control variable is less than the number of columns in the medalCounts and terminates when the control variable reaches the number of columns in the array medalCounts. We get the number of columns in the medalCounts by calling medalCounts[0].length. In the third part of the loop header, we increment the control variable by 1 after each iteration of the loop.", "Note that the first part is executed once before the loop starts, the second part is executed before each iteration, and the third part is executed after each iteration of the loop.<br><br>Also, note that the increment operator (++) adds 1 to the value of variable j and the result is stored back into the variable j. Therefore, it is functionally equivalent to the statement j = j + 1.", "Finally, note that the name that we choose for the index in the inner loop should be different from the index name in the outer for loop. Here, we choose i for the row index and j for the column index."],
        "indentLevel": 3
      },
      "helpList": ["This statement is the inner loop of the nested loop. It processes the elements within the row i where i is the row index in the medalCounts that changes after each iteration of the outer loop. To iterate over the individual elements in each row (i.e., iterating over the columns within a row) in the medalCounts, we need the indexes to start at 0 with every integer number up to but not including the number of columns.", "In the first part of the loop header, we define a control variable j and initialize it to 0. In the second part of the loop header, we test whether the control variable has reached the termination threshold. The loop is repeated if the control variable is less than the number of columns in the medalCounts and terminates when the control variable reaches the number of columns in the array medalCounts. We get the number of columns in the medalCounts by calling medalCounts[0].length. In the third part of the loop header, we increment the control variable by 1 after each iteration of the loop.", "Note that the first part is executed once before the loop starts, the second part is executed before each iteration, and the third part is executed after each iteration of the loop.<br><br>Also, note that the increment operator (++) adds 1 to the value of variable j and the result is stored back into the variable j. Therefore, it is functionally equivalent to the statement j = j + 1.", "Finally, note that the name that we choose for the index in the inner loop should be different from the index name in the outer for loop. Here, we choose i for the row index and j for the column index."]
    }],
    "alternatives": [],
    "fullyWorkedOut": true
  }, {
    "id": "43edf7d0-5a5a-47d9-9b30-103ceccb361c",
    "name": "Printing Table of Medal Winner Counts with Row and Column Totals",
    "order": 1,
    "language": "JAVA",
    "activityName": "arrays2d.j_print_medals",
    "fileName": "JPrintMedalsRowColumnTotal.java",
    "goalDescription": "Assume that we have an array of countries that stores the names of the seven countries that participated in the Skating competitions at the Winter Olympic. We also have a 7x3 matrix that stores the number of medals that these seven countries won. This matrix looks like as follows:\\n{ {1, 0, 1 },\\n { 1, 1, 0 },\\n ...}\\nThe first, second, and third numbers within a row i represent the number of Gold, Silver, and Bronze medals won by the country that is at the index i of the array of countries.\\nConstruct a program that takes this matrix and the array of countries, and prints a table of medal counts with row and column totals. The column totals are the sum of the gold, silver, and bronze medals won in the competition. The output table should look like as follows:\\n      Country    Gold  Silver  Bronze   Total\\n         Canada        1       0       1          2\\n            China        1       1       0          2\\n           ...\\nColumn Total      4       4       4",
    "correctOutput": "Name  G  S  B All\n CAN  1  0  1  2\n CHN  1  1  0  2\n GER  0  0  1  1\n KOR  1  0  0  1\n JPN  0  1  1  2\n RUS  0  1  1  2\n USA  1  1  0  2\n All  4  4  4",
    "userInputList": [],
    "userInput": "",
    "lineList": [{
      "id": "874999fd-1a76-44f2-aea7-cb7e714199ec",
      "number": 1,
      "content": "public class JPrintMedalsRowColumnTotal {",
      "commentList": [],
      "indentLevel": 0
    }, {
      "id": "3ecdb634-3dae-4f7f-9678-2978cb6b54b7",
      "number": 2,
      "content": "\tpublic static void main(String[] args) {",
      "commentList": [],
      "indentLevel": 1
    }, {
      "id": "d6677d9f-8c35-4470-ab5f-527ab28c5ada",
      "number": 3,
      "content": "\t\t//Step 1: Define an array of countries",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "3685333f-502b-498b-a658-4f931a79d733",
      "number": 4,
      "content": "\t\tString[] countries = {\"CAN\", \"CHN\", \"GER\", \"KOR\", \"JPN\", \"RUS\", \"USA\" };",
      "commentList": ["We define array countries of type string to hold the names of seven countries. We initialize the array by separating elements with a comma and enclosing the collection in braces { }."],
      "indentLevel": 2
    }, {
      "id": "efcb2b63-d7c8-46df-a247-3e75cadadd48",
      "number": 5,
      "content": "\t\t//Step 2: Define a 7x3 matrix that stores the number of medals the countries won",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "c52af332-9da0-4cdc-9702-e78ed16f2969",
      "number": 6,
      "content": "\t\tint[][] medalCounts = { { 1, 0, 1 }, { 1, 1, 0 }, { 0, 0, 1 }, { 1, 0, 0 }, ",
      "commentList": ["We need to create the matrix of medal counts. To do this, we use a two-dimensional array (an array of arrays) where each row corresponds to the gold, silver, and bronze medals won by one country. This statement creates a 7x3 two-dimensional array called medalCounts. Each row of the matrix corresponds to the medal counts for the corresponding country in the array of countries. The first, second, and third numbers within a row represent the number of Gold, Silver, and Bronze medals won by the corresponding country in that row.", "Note that arrays can naturally span multiple lines if we want them to because they are contained by braces."],
      "indentLevel": 2
    }, {
      "id": "e037b8f5-9792-4433-8af2-c31a49f2adf5",
      "number": 7,
      "content": "\t\t\t                    { 0, 1, 1 }, { 0, 1, 1 }, { 1, 1, 0 } };",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "f7158c0a-0b70-45a4-8cb6-b335ab89f9c5",
      "number": 8,
      "content": "\t\t//Step 3: Create an array to store column totals",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "f3347ed5-8345-41b9-ae45-60366f8ecc32",
      "number": 9,
      "content": "\t\tint[] columnTotals = new int[medalCounts[0].length];",
      "commentList": ["We want to compute the column total that is the sum of the total gold, silver, and bronze medals won in the competition. We need three variables to do this, which means that an array is a great way to store this data. In general, whenever we find ourselves thinking that we need n of some kind of data, we should think about using an array of length n. Here, we need 3 variables for storing the column totals; so, we create an array of length 3.", "The first, second, and third element in the array will be used for storing the column totals for gold medals, silver medals, and bronze medals won in the competition. This statement declares an array variable, columnTotals, creates an array of size medalCounts[0].length (medalCounts[0].length expression returns the number of columns in the medalCounts), and assigns its reference to columnTotals. By default, each number in the array is 0."],
      "indentLevel": 2
    }, {
      "id": "9e4c45d8-3a90-4ff9-be06-62c1024c29c7",
      "number": 10,
      "content": "\t\t//Step 4: Print the header of the output table",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "81735a83-e380-4208-b735-4d1d9628dcb6",
      "number": 11,
      "content": "\t\tSystem.out.printf(\"%4s%3s%3s%3s%4s\\n\",\"Name\", \"G\", \"S\", \"B\", \"All\");",
      "commentList": ["We want to print a header for the table of medal winner counts. The columns of the table from left to right represent the country, the number of gold, silver, and bronze medals the country won, and finally, the row total that is the total medals the country won. We want to format the table so that all values are right-aligned with sufficient spacing between columns. For this purpose, we call printf method.<br>Here, we use %4s to right-justify the first string argument of the format string in a field that is 4-characters wide, and %3s/%4s to right-justify each remaining string arguments in a field that is 3-characters/4-characters wide .", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method. The new line character at the end of the format string will add an end-of-line character at the end of the formatted text. This is what we need because we finished printing data of the table header and we want to start a new line.", "Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (s for strings)."],
      "indentLevel": 2
    }, {
      "id": "7bb10dde-9c97-40f5-9b73-6c69805b735f",
      "number": 12,
      "content": "\t\t//Step 5: Iterate through the rows in the medal counts matrix",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "d114427b-f4f3-473b-94c4-d2b72c90a370",
      "number": 13,
      "content": "\t\tfor (int i = 0; i < countries.length; i++) {",
      "commentList": ["We need to process the medal counts data and print medal counts and the total number of medals won for each country (row totals). This data, that is stored in medalCounts, is a two-dimensional array; therefore, we need to use nested for loops to process all of its elements and print the table. This statement is the outer for loop in the nested loop and it processes the data stored in medalCounts row by row.", "To iterate over the rows in the medalCounts, we need the indexes to start at 0 with every integer number up to but not including the number of rows.", "In the first part of the loop header, we define a control variable i and initialize it to 0. In the second part of the loop header, we test whether the control variable has reached the termination threshold. The loop is repeated if the control variable is less than the number of elements in the array countries and terminates when the control variable reaches the number of elements in the array countries. In the third part of the loop header, we increment the control variable by 1 after each iteration of the loop.", "Note that the first part is executed once before the loop starts, the second part is executed before each iteration, and the third part is executed after each iteration of the loop.<br><br>Also, note that the increment operator (++) adds 1 to the value of variable i and the result is stored back into the variable i. Therefore, it is functionally equivalent to the statement i = i + 1."],
      "indentLevel": 2
    }, {
      "id": "24c69775-01b9-4552-b9be-c53add2f08f4",
      "number": 14,
      "content": "\t\t\t//Step 5.1: Print the name of the country at row i",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "4db6b3b4-7bf3-4bcf-a19b-6003b2634919",
      "number": 15,
      "content": "\t\t\tSystem.out.printf(\"%4s\", countries[i]);",
      "commentList": ["We want to print the name of the country at row i. We also want to format the table row using the same format that we applied to the table header. So, similar to printing the table header, we call printf method.<br>We use %4s to right-justify the name of the country at row i (which is stored at countries[i]) in a field that is 4-characters wide.", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method.", "Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (s for strings)."],
      "indentLevel": 3
    }, {
      "id": "41cfecab-2072-4f51-bd9d-415d212387fa",
      "number": 16,
      "content": "\t\t\t//Step 5.2: Initialize the variable that we need to store the row total for row i",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "d84bb7ab-55a0-46f6-8bfb-e226aa02d049",
      "number": 17,
      "content": "\t\t\tint rowTotal = 0;",
      "commentList": ["We need variable rowTotal to compute the total number of medals won by the country at row i of the matrix. We need to set it to 0 every time that we want to process a row and compute the row total.", "Note that this statement cannot be placed inside the inner loop because in that case in every iteration of the inner loop variable rowTotal would be set to 0 and that means that row total would always be equal to the number of bronze medals no matter what the remaining medal counts are. We cannot place this statement outside the outer loop either because in that case total would show the sum of the row totals in each row and all its preceding rows. Therefore, the only place that we could place this statement is in the outer loop body before reaching to the inner loop."],
      "indentLevel": 3
    }, {
      "id": "63482d1a-0a38-4857-a0eb-a801b62e7321",
      "number": 18,
      "content": "\t\t\t//Step 5.3: Iterate through the columns of the medals counts matrix",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "e4c48f6f-1662-4318-9df1-73704f2e6c0f",
      "number": 19,
      "content": "\t\t\tfor (int j = 0; j < medalCounts[0].length; j++) {",
      "commentList": ["This statement is the inner loop of the nested loop. It processes the elements within the row i where i is the row index in the medalCounts that changes after each iteration of the outer loop. To iterate over the individual elements in each row (i.e., iterating over the columns within a row) in the medalCounts, we need the indexes to start at 0 with every integer number up to but not including the number of columns.", "In the first part of the loop header, we define a control variable j and initialize it to 0. In the second part of the loop header, we test whether the control variable has reached the termination threshold. The loop is repeated if the control variable is less than the number of columns in the medalCounts and terminates when the control variable reaches the number of columns in the array medalCounts. We get the number of columns in the medalCounts by calling medalCounts[0].length. In the third part of the loop header, we increment the control variable by 1 after each iteration of the loop.", "Note that the first part is executed once before the loop starts, the second part is executed before each iteration, and the third part is executed after each iteration of the loop.<br><br>Also, note that the increment operator (++) adds 1 to the value of variable j and the result is stored back into the variable j. Therefore, it is functionally equivalent to the statement j = j + 1.", "Finally, note that the name that we choose for the index in the inner loop should be different from the index name in the outer for loop. Here, we choose i for the row index and j for the column index."],
      "indentLevel": 3
    }, {
      "id": "6ebbf1ce-1c61-4b07-b694-353a644e5c85",
      "number": 20,
      "content": "\t\t\t\t//Step 5.3.1: Print the the number of medals at row i and column j of the matrix",
      "commentList": [],
      "indentLevel": 4
    }, {
      "id": "51a99aba-0d34-4731-b48a-ef2f397eb1d8",
      "number": 21,
      "content": "\t\t\t\tSystem.out.printf(\"%3d\", medalCounts[i][j]);",
      "commentList": ["We want to print the number of the medals at row i and column j of the the matrix. We also want to format the table row using the same format that we applied to the table header. So, similar to printing the table header, we call printf method.<br>We use %3d to right-justify the number of medals in a field that is 3-characters wide", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method. Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (d for decimals)."],
      "indentLevel": 4
    }, {
      "id": "7d0b9aa1-5678-4a79-85fb-c81bf5d51fd0",
      "number": 22,
      "content": "\t\t\t\t//Step 5.3.2: Update the row total for row i ",
      "commentList": [],
      "indentLevel": 4
    }, {
      "id": "e06bbc16-c848-4446-bea8-f9fdf4e92270",
      "number": 23,
      "content": "\t\t\t\trowTotal = rowTotal + medalCounts[i][j];",
      "commentList": ["We need to accumulate the number of different medals (gold, silver, bronze) won by the country at row i. So, in each iteration of the inner loop, the specified element in row i and column j of the medalCounts is added to and stored back into the variable rowTotal.", "The += operator adds the value of the element in row i and column j of the medalCounts to the value of the variable rowTotal and the result is stored in the variable rowTotal. Thus, this statement is equivalent to the statement rowTotal = rowTotal + medalCounts[i][j]."],
      "indentLevel": 4
    }, {
      "id": "14e2ecec-0b30-4a18-94ff-03cecc402346",
      "number": 24,
      "content": "\t\t        //Step 5.3.3: Update the column total for column j ",
      "commentList": [],
      "indentLevel": 4
    }, {
      "id": "73f9bcb1-8b6f-4262-89ce-d7ea7f83e948",
      "number": 25,
      "content": "\t\t\t\tcolumnTotals[j] += medalCounts[i][j];",
      "commentList": ["This statement adds the value of the current element in row i and column j to the element in the array columnTotals that stores the column total for the column j in the medalCounts.", "If j is 0, it adds the current element to the columnTotals[0] that stores total gold medals won in the competition; if j is 1, it adds the current element to the columnTotals[1] that stores total silver medals won in the competition; and if j is 2, it adds the current element to the columnTotals[2] that stores total bronze medals won in the competition.", "Note that the += operator adds the value of the element in row i and column j of the medalCounts (i.e., element medalCounts[i][j]) to the value of the array element columnTotals[j] and the result is stored in the array element columnTotals[j]. Thus, this statement is equivalent to the statement columnTotals[j] = columnTotals[j] + medalCounts[i][j]."],
      "indentLevel": 4
    }, {
      "id": "0a259929-e261-4947-9bb8-38864350d081",
      "number": 26,
      "content": "\t\t\t}",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "c6c8c83f-f70d-447b-bfb8-8fe382ed0015",
      "number": 27,
      "content": "\t\t\t//Step 5.4: Print the row total for row i of the output table",
      "commentList": [],
      "indentLevel": 3
    }, {
      "id": "046e39eb-525b-4183-b01b-b7c90a89b1fa",
      "number": 28,
      "content": "\t\t\tSystem.out.printf(\"%3d\\n\", rowTotal);        ",
      "commentList": ["We want to print the row total that is the total number of the medals won by the country at row i. We also want to format the table row using the same format that we applied to the table header. So, similar to printing the table header, we call printf method.<br>We use %3d to right-justify the row total in a field that is 3-characters wide.", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method.  The new line character at the end of the format string will add an end-of-line character at the end of the formatted text. This is what we need because we finished printing data of the row i of the matrix and we want to start a new line.", "Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (d for decimals). An error will occur if the argument is not a decimal number, for instance, if the argument is a string."],
      "indentLevel": 3
    }, {
      "id": "10d05f0c-88f3-4620-b453-736eb01ff474",
      "number": 29,
      "content": "\t\t}",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "7d0178e8-5745-42b7-b926-4b4b32108983",
      "number": 30,
      "content": "\t\t//Step 6: Print the column totals",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "9a4ce4cc-9753-46d5-87f1-b62a49ad0405",
      "number": 31,
      "content": "\t\tSystem.out.printf(\"%4s\", \"All\");",
      "commentList": ["We want to print the column totals and format this last row of the table using the same format that we applied to the table header. So, similar to printing the table header, we call printf method.<br>We use %4s to right-justify the string argument following the format string in a field that is 4-characters wide.", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method. ", "Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (s for strings)."],
      "indentLevel": 2
    }, {
      "id": "b215f71a-c90a-4783-85e7-54302f963796",
      "number": 32,
      "content": "\t\tfor (int x : columnTotals) {",
      "commentList": ["We want to print the column totals stored in the array columnTotals. We traverse the array elements using for–each statement. This for loop assigns the name x to each of the elements in the array in turn, from left to right, and the print statement will be executed for each."],
      "indentLevel": 2
    }, {
      "id": "1d346d17-7944-45ae-9fa1-53ce71a548ef",
      "number": 33,
      "content": "\t\t\tSystem.out.printf(\"%3d\", x);",
      "commentList": ["We want to print the column total for each column in the medalCounts. We also want to format this last row of the table using the same format that we applied to the table header. So, similar to printing the table header, we call printf method.<br>We use %3d to right-justify the decimal argument of the format method (i.e., value of variable x) in a field that is 3-characters wide.", "This method returns the result of replacing each format specifier in the format string with its corresponding argument passed to the printf method.", "Notice that the format specifier begins with a % sign, is followed by the field length, and ends with a letter specifying the kind of value (d for decimals). An error will occur if the argument is not a decimal number, for instance, if the argument is a string."],
      "indentLevel": 3
    }, {
      "id": "dd844b5f-d1d7-4348-b863-9ca3e8e19551",
      "number": 34,
      "content": "\t\t}",
      "commentList": [],
      "indentLevel": 2
    }, {
      "id": "159a63b7-3136-4090-9792-dd10c337609a",
      "number": 35,
      "content": "\t}",
      "commentList": [],
      "indentLevel": 1
    }, {
      "id": "2381b7f8-e7c5-46c0-ad1e-17c9f517f9e8",
      "number": 36,
      "content": "}",
      "commentList": [],
      "indentLevel": 0
    }],
    "distractorList": [{
      "id": "bb8ef4d0-9b3a-4742-80fe-0600c0d847cb",
      "line": {
        "id": "6ac21633-9cd7-4740-9889-39684e8a303e",
        "number": 0,
        "content": "int[] columnTotals = new int[countries.length];",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }, {
      "id": "31f2d449-aa2a-4df7-a584-09024517f0c4",
      "line": {
        "id": "429149e1-7f97-427d-a940-decbb408b983",
        "number": 0,
        "content": "int[] columnTotals = new int[medalCounts.length];",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }, {
      "id": "fbaf31a6-1da5-4d92-bf1b-c23e8592105d",
      "line": {
        "id": "ae41c723-30a1-4b50-8df7-d9d65bbcbf9f",
        "number": 0,
        "content": "columnTotals[i] += medalCounts[i][j];",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }, {
      "id": "6e023dd4-3457-48e3-8c98-2f7d951f5560",
      "line": {
        "id": "c23de1d8-7f99-4df9-85ab-a6d4e7120027",
        "number": 0,
        "content": "columnTotals[i] = medalCounts[i][j];",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }, {
      "id": "badc44d8-3e91-4c66-92da-84dc08c827e0",
      "line": {
        "id": "7fb16d89-7540-44c0-ab03-b07ebc6d05e6",
        "number": 0,
        "content": "columnTotals[j] += medalCounts[j][i];",
        "commentList": [""],
        "indentLevel": 0
      },
      "helpList": [""]
    }],
    "blankLineList": [{
      "id": "a6493959-84da-47d0-b3d9-c16e7ebc0d7c",
      "line": {
        "id": "f3347ed5-8345-41b9-ae45-60366f8ecc32",
        "number": 9,
        "content": "\t\tint[] columnTotals = new int[medalCounts[0].length];",
        "commentList": ["We want to compute the column total that is the sum of the total gold, silver, and bronze medals won in the competition. We need three variables to do this, which means that an array is a great way to store this data. In general, whenever we find ourselves thinking that we need n of some kind of data, we should think about using an array of length n. Here, we need 3 variables for storing the column totals; so, we create an array of length 3.", "The first, second, and third element in the array will be used for storing the column totals for gold medals, silver medals, and bronze medals won in the competition. This statement declares an array variable, columnTotals, creates an array of size medalCounts[0].length (medalCounts[0].length expression returns the number of columns in the medalCounts), and assigns its reference to columnTotals. By default, each number in the array is 0."],
        "indentLevel": 2
      },
      "helpList": ["We want to compute the column total that is the sum of the total gold, silver, and bronze medals won in the competition. We need three variables to do this, which means that an array is a great way to store this data. In general, whenever we find ourselves thinking that we need n of some kind of data, we should think about using an array of length n. Here, we need 3 variables for storing the column totals; so, we create an array of length 3.", "The first, second, and third element in the array will be used for storing the column totals for gold medals, silver medals, and bronze medals won in the competition. This statement declares an array variable, columnTotals, creates an array of size medalCounts[0].length (medalCounts[0].length expression returns the number of columns in the medalCounts), and assigns its reference to columnTotals. By default, each number in the array is 0."]
    }, {
      "id": "344e95b7-0d07-4ec1-8f64-c536cfb11a02",
      "line": {
        "id": "73f9bcb1-8b6f-4262-89ce-d7ea7f83e948",
        "number": 25,
        "content": "\t\t\t\tcolumnTotals[j] += medalCounts[i][j];",
        "commentList": ["This statement adds the value of the current element in row i and column j to the element in the array columnTotals that stores the column total for the column j in the medalCounts.", "If j is 0, it adds the current element to the columnTotals[0] that stores total gold medals won in the competition; if j is 1, it adds the current element to the columnTotals[1] that stores total silver medals won in the competition; and if j is 2, it adds the current element to the columnTotals[2] that stores total bronze medals won in the competition.", "Note that the += operator adds the value of the element in row i and column j of the medalCounts (i.e., element medalCounts[i][j]) to the value of the array element columnTotals[j] and the result is stored in the array element columnTotals[j]. Thus, this statement is equivalent to the statement columnTotals[j] = columnTotals[j] + medalCounts[i][j]."],
        "indentLevel": 4
      },
      "helpList": ["This statement adds the value of the current element in row i and column j to the element in the array columnTotals that stores the column total for the column j in the medalCounts.", "If j is 0, it adds the current element to the columnTotals[0] that stores total gold medals won in the competition; if j is 1, it adds the current element to the columnTotals[1] that stores total silver medals won in the competition; and if j is 2, it adds the current element to the columnTotals[2] that stores total bronze medals won in the competition.", "Note that the += operator adds the value of the element in row i and column j of the medalCounts (i.e., element medalCounts[i][j]) to the value of the array element columnTotals[j] and the result is stored in the array element columnTotals[j]. Thus, this statement is equivalent to the statement columnTotals[j] = columnTotals[j] + medalCounts[i][j]."]
    }],
    "alternatives": [{
      "id": "aa95c606-069e-47a2-90e4-15d7c15a20ba",
      "alternativeTileIds": "6ac21633-9cd7-4740-9889-39684e8a303e,ae41c723-30a1-4b50-8df7-d9d65bbcbf9f",
      "output": "Name  G  S  B All\n CAN  1  0  1  2\n CHN  1  1  0  2\n GER  0  0  1  1\n KOR  1  0  0  1\n JPN  0  1  1  2\n RUS  0  1  1  2\n USA  1  1  0  2\n All  2  2  1  1  2  2  2",
      "userInput": ""
    }, {
      "id": "ca087030-bd9b-4d94-ba05-d05f95217dd0",
      "alternativeTileIds": "ae41c723-30a1-4b50-8df7-d9d65bbcbf9f,6ac21633-9cd7-4740-9889-39684e8a303e",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "93c89a7e-6080-41ca-a407-f8df6f90d5bc",
      "alternativeTileIds": "6ac21633-9cd7-4740-9889-39684e8a303e,c23de1d8-7f99-4df9-85ab-a6d4e7120027",
      "output": "Name  G  S  B All\n CAN  1  0  1  2\n CHN  1  1  0  2\n GER  0  0  1  1\n KOR  1  0  0  1\n JPN  0  1  1  2\n RUS  0  1  1  2\n USA  1  1  0  2\n All  1  0  1  0  1  1  0",
      "userInput": ""
    }, {
      "id": "a0f9cfdd-1174-4514-8b4e-2652b785543b",
      "alternativeTileIds": "c23de1d8-7f99-4df9-85ab-a6d4e7120027,6ac21633-9cd7-4740-9889-39684e8a303e",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                              ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                                 ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "71dc164e-0526-4fa3-8dc1-d54f9067fbb5",
      "alternativeTileIds": "ae41c723-30a1-4b50-8df7-d9d65bbcbf9f,c23de1d8-7f99-4df9-85ab-a6d4e7120027",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "489f06aa-458a-47c1-8fcf-717690d550f2",
      "alternativeTileIds": "c23de1d8-7f99-4df9-85ab-a6d4e7120027,ae41c723-30a1-4b50-8df7-d9d65bbcbf9f",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                              ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                                 ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "78e4b3b4-af98-4d1e-bf76-bff48740037c",
      "alternativeTileIds": "6ac21633-9cd7-4740-9889-39684e8a303e,73f9bcb1-8b6f-4262-89ce-d7ea7f83e948",
      "output": "Name  G  S  B All\n CAN  1  0  1  2\n CHN  1  1  0  2\n GER  0  0  1  1\n KOR  1  0  0  1\n JPN  0  1  1  2\n RUS  0  1  1  2\n USA  1  1  0  2\n All  4  4  4  0  0  0  0",
      "userInput": ""
    }, {
      "id": "28c89c58-cbe3-4d6b-904c-5d81127aecc3",
      "alternativeTileIds": "73f9bcb1-8b6f-4262-89ce-d7ea7f83e948,6ac21633-9cd7-4740-9889-39684e8a303e",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "fd6522b6-b894-4eb4-b824-e32524c889e5",
      "alternativeTileIds": "ae41c723-30a1-4b50-8df7-d9d65bbcbf9f,73f9bcb1-8b6f-4262-89ce-d7ea7f83e948",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "502e4752-ce3e-42b8-b6d6-699844f36930",
      "alternativeTileIds": "73f9bcb1-8b6f-4262-89ce-d7ea7f83e948,ae41c723-30a1-4b50-8df7-d9d65bbcbf9f",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "7ddc36c2-9a52-42f8-b060-8ec21398bfdf",
      "alternativeTileIds": "c23de1d8-7f99-4df9-85ab-a6d4e7120027,73f9bcb1-8b6f-4262-89ce-d7ea7f83e948",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                              ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                                 ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "835811b6-9cf0-4bc5-8fb5-884c3a967ad4",
      "alternativeTileIds": "73f9bcb1-8b6f-4262-89ce-d7ea7f83e948,c23de1d8-7f99-4df9-85ab-a6d4e7120027",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "4de2f776-d26d-4949-b401-1cae2e67e58c",
      "alternativeTileIds": "6ac21633-9cd7-4740-9889-39684e8a303e,7fb16d89-7540-44c0-ab03-b07ebc6d05e6",
      "output": "java.lang.ArrayIndexOutOfBoundsException: 3\nJPrintMedalsRowColumnTotal.main(JPrintMedalsRowColumnTotal.java:25)\n",
      "userInput": ""
    }, {
      "id": "e193aa29-e0a3-4b0b-aefd-a0cd30596d36",
      "alternativeTileIds": "7fb16d89-7540-44c0-ab03-b07ebc6d05e6,6ac21633-9cd7-4740-9889-39684e8a303e",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                               ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                                  ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "dec0144d-c4c6-4529-b9dd-af39aac6f353",
      "alternativeTileIds": "ae41c723-30a1-4b50-8df7-d9d65bbcbf9f,7fb16d89-7540-44c0-ab03-b07ebc6d05e6",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "825b967b-2ab6-4c74-972a-6d93e942dd96",
      "alternativeTileIds": "7fb16d89-7540-44c0-ab03-b07ebc6d05e6,ae41c723-30a1-4b50-8df7-d9d65bbcbf9f",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                               ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                                  ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "8d659faa-e8b8-46c7-ba44-af297ed490ab",
      "alternativeTileIds": "c23de1d8-7f99-4df9-85ab-a6d4e7120027,7fb16d89-7540-44c0-ab03-b07ebc6d05e6",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                              ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                                 ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "b462d63f-644b-4b2f-9286-9e28070a45c0",
      "alternativeTileIds": "7fb16d89-7540-44c0-ab03-b07ebc6d05e6,c23de1d8-7f99-4df9-85ab-a6d4e7120027",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                               ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                                  ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "845e76c5-68a0-40a1-935c-480b6a536ba6",
      "alternativeTileIds": "73f9bcb1-8b6f-4262-89ce-d7ea7f83e948,7fb16d89-7540-44c0-ab03-b07ebc6d05e6",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "88af8306-b64f-4233-8f55-6fe5457cfce1",
      "alternativeTileIds": "7fb16d89-7540-44c0-ab03-b07ebc6d05e6,73f9bcb1-8b6f-4262-89ce-d7ea7f83e948",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                               ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                                  ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:25: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n6 errors\n",
      "userInput": ""
    }, {
      "id": "e5c3cedb-69b6-46b9-9551-c42f0cc3f774",
      "alternativeTileIds": "6ac21633-9cd7-4740-9889-39684e8a303e,f3347ed5-8345-41b9-ae45-60366f8ecc32",
      "output": "/JPrintMedalsRowColumnTotal.java:25: error: variable columnTotals is already defined in method main(String[])\n\t\tint[] columnTotals = new int[medalCounts[0].length];\n\t\t      ^\n1 error\n",
      "userInput": ""
    }, {
      "id": "87e18349-b98c-4978-a5d6-67419708c2d2",
      "alternativeTileIds": "f3347ed5-8345-41b9-ae45-60366f8ecc32,6ac21633-9cd7-4740-9889-39684e8a303e",
      "output": "/JPrintMedalsRowColumnTotal.java:25: error: variable columnTotals is already defined in method main(String[])\nint[] columnTotals = new int[countries.length];\n      ^\n1 error\n",
      "userInput": ""
    }, {
      "id": "7640db54-d49f-43b7-a4fb-68a0d31b8ca3",
      "alternativeTileIds": "ae41c723-30a1-4b50-8df7-d9d65bbcbf9f,f3347ed5-8345-41b9-ae45-60366f8ecc32",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "94748d3e-1900-44af-9ef6-4f3f6f7b9cfc",
      "alternativeTileIds": "f3347ed5-8345-41b9-ae45-60366f8ecc32,ae41c723-30a1-4b50-8df7-d9d65bbcbf9f",
      "output": "java.lang.ArrayIndexOutOfBoundsException: 3\nJPrintMedalsRowColumnTotal.main(JPrintMedalsRowColumnTotal.java:25)\n",
      "userInput": ""
    }, {
      "id": "73a9dcfc-a49a-476d-b6b5-42dee9b82327",
      "alternativeTileIds": "c23de1d8-7f99-4df9-85ab-a6d4e7120027,f3347ed5-8345-41b9-ae45-60366f8ecc32",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                              ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                                 ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "2a4c8e36-28b7-43be-821f-9d3fbaf24570",
      "alternativeTileIds": "f3347ed5-8345-41b9-ae45-60366f8ecc32,c23de1d8-7f99-4df9-85ab-a6d4e7120027",
      "output": "java.lang.ArrayIndexOutOfBoundsException: 3\nJPrintMedalsRowColumnTotal.main(JPrintMedalsRowColumnTotal.java:25)\n",
      "userInput": ""
    }, {
      "id": "fd2c7b69-fbe2-422e-9c66-edacbfe3c4ae",
      "alternativeTileIds": "73f9bcb1-8b6f-4262-89ce-d7ea7f83e948,f3347ed5-8345-41b9-ae45-60366f8ecc32",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "29ef13b7-addb-4574-8441-976eaf839a5a",
      "alternativeTileIds": "7fb16d89-7540-44c0-ab03-b07ebc6d05e6,f3347ed5-8345-41b9-ae45-60366f8ecc32",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                               ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                                  ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "35f5167c-7f2a-4da4-aaf1-1adcc45e24f2",
      "alternativeTileIds": "f3347ed5-8345-41b9-ae45-60366f8ecc32,7fb16d89-7540-44c0-ab03-b07ebc6d05e6",
      "output": "java.lang.ArrayIndexOutOfBoundsException: 3\nJPrintMedalsRowColumnTotal.main(JPrintMedalsRowColumnTotal.java:25)\n",
      "userInput": ""
    }, {
      "id": "56003711-b512-47ca-91ab-e7f5e9ad9183",
      "alternativeTileIds": "6ac21633-9cd7-4740-9889-39684e8a303e,429149e1-7f97-427d-a940-decbb408b983",
      "output": "/JPrintMedalsRowColumnTotal.java:25: error: variable columnTotals is already defined in method main(String[])\nint[] columnTotals = new int[medalCounts.length];\n      ^\n1 error\n",
      "userInput": ""
    }, {
      "id": "1423a842-2227-4615-b47b-db785159f557",
      "alternativeTileIds": "429149e1-7f97-427d-a940-decbb408b983,6ac21633-9cd7-4740-9889-39684e8a303e",
      "output": "/JPrintMedalsRowColumnTotal.java:25: error: variable columnTotals is already defined in method main(String[])\nint[] columnTotals = new int[countries.length];\n      ^\n1 error\n",
      "userInput": ""
    }, {
      "id": "698122b5-68ff-4e35-8214-0936757abad9",
      "alternativeTileIds": "ae41c723-30a1-4b50-8df7-d9d65bbcbf9f,429149e1-7f97-427d-a940-decbb408b983",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] += medalCounts[i][j];\n                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "4f1fcd06-96b9-4d50-86bb-77d067d464bf",
      "alternativeTileIds": "429149e1-7f97-427d-a940-decbb408b983,ae41c723-30a1-4b50-8df7-d9d65bbcbf9f",
      "output": "Name  G  S  B All\n CAN  1  0  1  2\n CHN  1  1  0  2\n GER  0  0  1  1\n KOR  1  0  0  1\n JPN  0  1  1  2\n RUS  0  1  1  2\n USA  1  1  0  2\n All  2  2  1  1  2  2  2",
      "userInput": ""
    }, {
      "id": "d3a1a6e6-f0df-4791-9d10-5a0f70828a7c",
      "alternativeTileIds": "c23de1d8-7f99-4df9-85ab-a6d4e7120027,429149e1-7f97-427d-a940-decbb408b983",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n             ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                              ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[i] = medalCounts[i][j];\n                                 ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "5fd1a736-0596-4d03-8fda-53ee953f8848",
      "alternativeTileIds": "429149e1-7f97-427d-a940-decbb408b983,c23de1d8-7f99-4df9-85ab-a6d4e7120027",
      "output": "Name  G  S  B All\n CAN  1  0  1  2\n CHN  1  1  0  2\n GER  0  0  1  1\n KOR  1  0  0  1\n JPN  0  1  1  2\n RUS  0  1  1  2\n USA  1  1  0  2\n All  1  0  1  0  1  1  0",
      "userInput": ""
    }, {
      "id": "b0205214-e146-4481-8588-bf5d050b000d",
      "alternativeTileIds": "73f9bcb1-8b6f-4262-89ce-d7ea7f83e948,429149e1-7f97-427d-a940-decbb408b983",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                               ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\n\t\t\t\tcolumnTotals[j] += medalCounts[i][j];\n\t\t\t\t                                  ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "25d28042-4700-48c6-a482-7e9647a88c90",
      "alternativeTileIds": "429149e1-7f97-427d-a940-decbb408b983,73f9bcb1-8b6f-4262-89ce-d7ea7f83e948",
      "output": "Name  G  S  B All\n CAN  1  0  1  2\n CHN  1  1  0  2\n GER  0  0  1  1\n KOR  1  0  0  1\n JPN  0  1  1  2\n RUS  0  1  1  2\n USA  1  1  0  2\n All  4  4  4  0  0  0  0",
      "userInput": ""
    }, {
      "id": "1436390b-3a9b-4c7c-8aad-083cef29cc38",
      "alternativeTileIds": "7fb16d89-7540-44c0-ab03-b07ebc6d05e6,429149e1-7f97-427d-a940-decbb408b983",
      "output": "/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n             ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                               ^\n  symbol:   variable j\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:9: error: cannot find symbol\ncolumnTotals[j] += medalCounts[j][i];\n                                  ^\n  symbol:   variable i\n  location: class JPrintMedalsRowColumnTotal\n/JPrintMedalsRowColumnTotal.java:32: error: cannot find symbol\n\t\tfor (int x : columnTotals) {\n\t\t             ^\n  symbol:   variable columnTotals\n  location: class JPrintMedalsRowColumnTotal\n5 errors\n",
      "userInput": ""
    }, {
      "id": "98f05b70-45c8-4cd6-81f5-08446c86b901",
      "alternativeTileIds": "429149e1-7f97-427d-a940-decbb408b983,7fb16d89-7540-44c0-ab03-b07ebc6d05e6",
      "output": "java.lang.ArrayIndexOutOfBoundsException: 3\nJPrintMedalsRowColumnTotal.main(JPrintMedalsRowColumnTotal.java:25)\n",
      "userInput": ""
    }, {
      "id": "3bd03cda-473e-4ce0-b9d9-1ff581848c73",
      "alternativeTileIds": "f3347ed5-8345-41b9-ae45-60366f8ecc32,429149e1-7f97-427d-a940-decbb408b983",
      "output": "/JPrintMedalsRowColumnTotal.java:25: error: variable columnTotals is already defined in method main(String[])\nint[] columnTotals = new int[medalCounts.length];\n      ^\n1 error\n",
      "userInput": ""
    }, {
      "id": "b57d2543-36d6-4fb6-8f0b-5549b45584c4",
      "alternativeTileIds": "429149e1-7f97-427d-a940-decbb408b983,f3347ed5-8345-41b9-ae45-60366f8ecc32",
      "output": "/JPrintMedalsRowColumnTotal.java:25: error: variable columnTotals is already defined in method main(String[])\n\t\tint[] columnTotals = new int[medalCounts[0].length];\n\t\t      ^\n1 error\n",
      "userInput": ""
    }],
    "fullyWorkedOut": false
  }]
};