/* Delete a course (Barb) */
const canvas = require('canvas-wrapper');

module.exports = (course, stepCallback) => {
  
    /* Only delete when flagged for removal */
    if (course.settings.deleteCourse == true) {
        var url = `/api/v1/courses/${course.info.canvasOU}?event=delete`;
        canvas.delete(url, (err, body) => {
            if (err) {
                course.throwErr('deleteCourse', err);
                return;
            }
            course.message(`Course ${course.info.canvasOU} was successfully deleted.`);
            stepCallback(null, course);
            return;
        });
    } else if (course.info.canvasOU === undefined) {
        course.warning('Course was not defined.');
        stepCallback(null, course);
        return;
    } else {
        // course.message('"Delete Course" was disabled in settings. The  course was not deleted.');
        stepCallback(null, course);
        return;
    }
};