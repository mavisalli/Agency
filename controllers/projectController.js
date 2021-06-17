const Project = require("../models/Project");
const fs = require("fs"); //core modul, uploads dosyası olusması icin

exports.createProject = async (req, res) => {


    const uploadDir = "public/uploads";

    if(!fs.existsSync(uploadDir)) {  //alttaki islemlere gecmeden bu islemi yapmasını istedigimiz icin senkron kullandık.
      fs.mkdirSync(uploadDir);
    }

    
    let uploadeImage = req.files.image;
    let uploadPath = __dirname + "/../public/uploads/" + uploadeImage.name;  
    //uploadpath tanımlıyoruz cünkü public'in icinde yükledigimiz görsellerin upload dosyasının icinde cıkmasını istiyoruz. __dirname bize varolan klasorün kendisini gösteriyor. uploads dosyasının kendiliginden olusmasını bekliyoruz ve en sona yükledigimiz görselin adını yazıyoruz.  
 
    uploadeImage.mv(uploadPath, async ()=> {
      await Project.create({
        ...req.body,
        image: "/uploads/" + uploadeImage.name
      });
      res.redirect("/");
    });
          
};

exports.updateProject = async (req, res) => {
  try{

    const project = await Project.findOne({ _id: req.params.id });

    project.title = req.body.title;
    project.subtitle = req.body.subtitle;
    project.description = req.body.description;
    project.client = req.body.client;
    project.save()


    res.redirect('/')
  } catch {
    res.status(400).json({
      status: 'fail',
    
    });
  }
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndRemove(req.params.id);
  res.redirect('/');
  
}




