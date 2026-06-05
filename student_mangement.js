

let student = [];

function addStudent(id,name,marks){
    student.push({
        id, 
        name,
        marks
    })
}
function viewStudent(){
    console.log(student)
}
function deleteStudent(id){
      student = student.filter(
        function(student){
            return student.id !== id
        })
}
    
addStudent(1,"Ramakrishna",299),
addStudent(2,"katravath Ramakrishna",302),
addStudent(3,"katravath Ramakrishna",309)

viewStudent()
deleteStudent(1)
viewStudent()












