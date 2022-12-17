/* Create a course (Barb) */
const Course = require("./Course")

async function createCourse(){
    const course255 = await Course.create({
        name:"English 101",
        description:"Credits: 4"
    })
    await course.save()

    console.log(course)
    const course140 = await Course.create({
        name:"Math 111",
        description: "Credits: 3"
    })
    await course.save()

    console.log(course)
    const course264 = await Course.create({
        name:"History 121",
        description: "Credits: 3"
    })
    await course.save()
    console.log(course)
}

module.exports = mongoose.model('Course', courseSchema)