const Music = require('../models/music');

exports.index = async (req, res, next) => {
  try {
    const music = await Music.find();

    res.status(200).json(music);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try{
    const music = await Music.findById(req.params.id);
    res.status(200).json(music);
  } catch(error){
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { title, artist, genre,timestamp } = req.body;

    const qt = await Music.create({
      artist,
      title,
      genre,
      timestamp
    });

    
    res.status(200).json({ message: "Music was created successfully", music: qt });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try{
    const {id,artist, title,genre, timestamp} = req.body;
    const music = await Music.findOneAndUpdate({id}, {artist, title, genre, timestamp});
    res.status(200).json({message: "Music was updated successfully,"});
  }catch(error){
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try{
    const {id} = req.body;
    await Music.findOneAndDelete({id: id});
    res.status(200).json({message: "Music was deleted successfully"});

  }catch(error){
    next(error);
  }
};