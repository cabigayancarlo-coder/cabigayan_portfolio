const Message = document.getElementById("message")
const Button1 = document.getElementById("loadBtn")
const Profile = document.getElementById("profile")
const Grades = document.getElementById("grades")
const Schedule = document.getElementById("schedule")

Button1.addEventListener("click",function(){
    Message.innerHTML= "Loading Dashboard..."

    Profile.innerHTML = "Profile: Waiting..."
    Grades.innerHTML = "Grades: Waiting..."
    Schedule. innerHTML = "Schedule: Waiting..."

    const ProfilePromise = new Promise(function(resolve){
        setTimeout(function(){
            Profile.innerHTML = "Profile: Ako na lang"
            resolve()
        },1000)
    })

    const GradesPromise = new Promise(function(resolve){
        setTimeout(function(){
            Grades.innerHTML = "Grades: I'm begging"
            resolve()
        },2000)
    })

    const SchedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            Schedule.innerHTML = "Schedule: bakit s'ya?"
            resolve()
        },3000)
    })

    Promise.all([ProfilePromise, GradesPromise, SchedulePromise])

    .then(function(){
        setTimeout(function(){
            Message.innerHTML = "Kaya mo naman pala eh, pero bakit pagdating sa'kin hirap na hirap ka"
        },2000)

    })
    
})