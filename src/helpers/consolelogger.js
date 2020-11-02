const consoleLogger = (setConsoled, consoled) => {
  if (!consoled) {
    const imageStyle = [
      'background-image: url("https://thumbs.gfycat.com/ImmaculateImpassionedKitten-max-1mb.gif")',
      "background-size: cover",
      "padding: 150px 300px",
      "width: 100px;",
      "height: 50px;",
    ].join(";");
    console.log("%c ", imageStyle);

    console.log(
      "%cThis could be us squashing bugs together if you hire me! %c\nportfolio \nhttps://mmarsden89.github.io\ngithub \nhttps://github.com/mmarsden89 \nlinkedin \nhttps://www.linkedin.com/in/matthewjmarsden/",
      "color:white;font-size:12px;background-color:green",
      "color: blue; font-weight: 900"
    );
    setConsoled(true);
  }
};

export default consoleLogger;
