function clickHandler(e){
  const mouseX = e.offsetX, mouseY = e.offsetY;
  for(const j of junk) {
    junk_min_x = j.x - 12*j.size;
    junk_max_x = j.x + 12*j.size;
    junk_min_y = j.y - 12*j.size;
    junk_max_y = j.y + 12*j.size;

    //TODO: write some code here that checks whether
    //(mouseX, mouseY) is inside j

    if (mouseX >= junk_min_x
      && mouseX <= junk_max_x
      && mouseY >= junk_min_y
      && mouseY <= junk_max_y) {
      j.alive = false;
    }
  }

  for(const s of ships) {
    ship_min_x = s.x - 15*s.size;
    ship_max_x = s.x + 15*s.size;
    ship_min_y = s.y - 15*s.size;
    ship_max_y = s.y + 15*s.size;

    if (mouseX >= ship_min_x
      && mouseX <= ship_max_x
      && mouseY >= ship_min_y
      && mouseY <= ship_max_y) {
      s.alive = false;
    }
  }
}

canvas.addEventListener('click', clickHandler);

function checkCollisions(){
    //todo - loop through all junk/ship pairs
    //check to see whether they're colliding.
    //If so, set both of their alive to false
    for(const j of junk) {
        for(const s of ships){
            if(j.alive && s.alive){
                junk_min_x = j.x - 12*j.size;
                junk_max_x = j.x + 12*j.size;
                junk_min_y = j.y - 12*j.size;
                junk_max_y = j.y + 12*j.size;

                ship_min_x = s.x - 15*s.size;
                ship_max_x = s.x + 15*s.size;
                ship_min_y = s.y - 15*s.size;
                ship_max_y = s.y + 15*s.size;

                if (ship_max_x > junk_min_x
                  && ship_min_x < junk_max_x
                  && ship_max_y > junk_min_y
                  && ship_min_y < junk_max_y
                ) {
                  s.alive = false;
                  j.alive = false;
                }
            }
        }
    }
}
