// dream coding project
const projectFolder = "C:/Users/CUCHO/Downloads/test"; 
const fs = require('fs');

// create directories
!fs.existsSync('C:/Users/CUCHO/Downloads/test/video') && fs.mkdirSync('C:/Users/CUCHO/Downloads/test/video');
!fs.existsSync('C:/Users/CUCHO/Downloads/test/captured') && fs.mkdirSync('C:/Users/CUCHO/Downloads/test/captured');
!fs.existsSync('C:/Users/CUCHO/Downloads/test/duplicated') && fs.mkdirSync('C:/Users/CUCHO/Downloads/test/duplicated');

//read directory files
const files = fs.readdirSync(projectFolder);
console.log(files);

// check extension
for (var i = 0; i < files.length; i++){
    var file = files[i];
    var suffix = file.substr(file.length -4, file.length);
    var checkE = file.substr(4);
    const dir = projectFolder + '/';
    
    // console.log(file);
    // console.log(suffix);
    // console.log(checkE);
    // console.log(checkE.substr(0, 1));

    if (suffix === '.mov' || suffix === '.mp4'){

        fs.rename(dir+file, dir+'/video/'+file, (error) => {
            console.log(error);

        });

    } else {
        if (suffix === '.png' || suffix === '.aae'){

            fs.rename(dir+file, dir+'/captured/'+file, (error) => {
            console.log(error);});

        } else {
            if (suffix === '.jpg' && checkE.substr(0, 1) === 'E'){
                const fileName = file; 
                const duplicatedFile = fileName.replace('E', '');
                fs.rename(dir+duplicatedFile, dir+'/duplicated/'+duplicatedFile, (error) => {
                    console.log(error);
                });
            }

        }
    }
};
