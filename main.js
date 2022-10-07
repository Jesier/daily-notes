/*
    Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

// start with a variable of a empty array

const notes = [
    // make a couple of objects
    {
        id: 1,
        text: "Hi future me",
        author: "Jesier Santiago",
        date: "8-18-2022",
        topics: ["look back here if you need help", "2", "3"]
    },
    {
        id: 2,
        text: "hello again",
        author: "jes again",
        date: "8-18-2022",
        topics: ["hey this time its me agaih", "2", "3" ]
    },
]
//.push variable newNotes into notes
notes.push({
    id: 3,
    text: "Heloop",
    author: "Jesantiago",
    date: "Today",
    topics: ["its", "me", "array"]
})
//console.log() to see if it worked
for (const allNotes of notes) {
    console.log(allNotes)
}


for (const texts of notes)
    console.log(texts.text)
//DONT PUT ("*** All Note Topics ***") IN THE LOOP IF YOU DONT WANT IT OVER EACH TOPIC
console.log("*** All Note Topics ***")
for (const tops of notes) {
    {
        console.log(tops.topics)
    }
}

//to get an average of topics we need to count all topics start with 0
//begin with a flexible variable that starts at 0
//i need to get through the property to access the topics
//then i need to average those accessed topics
//i need to divide the average topics by all the notes 
//log to achieve answer
let totalTopics = 0
for (const note of notes) {
    totalTopics += note.topics.length

}
const averageTopics = totalTopics / notes.length
console.log(`*** Average Topics Per Note ***
${averageTopics}`)


//i need to find a "look back here if you need help" inside my notes
//i need a empty variable with an array
//i need a variable that looks for the string inside of a topic
//i would need to recall the string out with a .includes() command

const filteredNotes = []
const criteria = "its"

for (const filTopic of notes) {
   if (filTopic.topics.includes(criteria))
        filteredNotes.push(criteria)
}
console.log(filteredNotes)


console.log("***  Note Articles  ***")
