/**
 * Created by vanshika_mohapatra on 2/18/2016.
 */
var gulp=require('gulp');
var nodemon=require('gulp-nodemon');

gulp.task('default',function(){
    nodemon({
        script:'app.js',
        ext:'js',
        ignore:['./node_modules/**', './.idea/**'],
        env:{
            PORT:9000
        }})
        .on('restart',function(){
            console.log('Restarting');
        });
});
