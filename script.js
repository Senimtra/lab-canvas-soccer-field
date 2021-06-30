/*
###############################
## LAB - Canvas Soccer Field ##
############################### */

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const widthField = document.querySelector('canvas').width;
const heightField = document.querySelector('canvas').height;

// ### Field size 80m / 120 m ###
const meter = ((widthField / 14) * 12) / 120;

// ### Declaring center ###
const middleX = widthField / 2;
const middleY = heightField / 2;

// ### Declaring net mesh size ###
const meshSizeX = 5.9;
const meshSizeY = 4.95;
let xOffset = -60 * meter;

// ### Colors ###
// white-ish = #EAF0E1
// light-green = #529E0D
// dark-green = #408508

drawSoccerField = () => {
   // draw pitch
   for (let i = 0; i < 14; i++) {
      if (i % 2 === 0) {
         context.fillStyle = '#529E0D';
      } else {
         context.fillStyle = '#408508';
      }
      context.fillRect(i * (widthField / 14), 0, widthField / 14, heightField);
   }

   // draw outer lines
   context.strokeStyle = '#EAF0E1';
   context.lineWidth = 3;
   context.strokeRect(widthField / 14, (heightField - 80 * meter) / 2, 120 * meter, 80 * meter);

   // draw centre line
   context.beginPath();
   context.moveTo(middleX, middleY - 40 * meter);
   context.lineTo(middleX, middleY + 40 * meter);

   // draw centre spot
   context.moveTo(middleX, middleY);
   context.arc(middleX, middleY, 2, 0, Math.PI * 2);

   // draw centre circle
   context.moveTo(middleX + 10.5 * meter, middleY);
   context.arc(middleX, middleY, 10.5 * meter, 0, Math.PI * 2);

   // top left corner
   context.moveTo(middleX - 60 * meter, middleY - 40 * meter);
   context.arc(middleX - 60 * meter, middleY - 40 * meter, 2.5 * meter, 0, ((Math.PI * 2) / 360) * 90);
   // top right corner
   context.moveTo(middleX + 60 * meter, middleY - 40 * meter);
   context.arc(middleX + 60 * meter, middleY - 40 * meter, 2.5 * meter, ((Math.PI * 2) / 360) * 90, ((Math.PI * 2) / 360) * 180);
   // bottom left corner
   context.moveTo(middleX - 60 * meter, middleY + 40 * meter);
   context.arc(middleX - 60 * meter, middleY + 40 * meter, 2.5 * meter, 0, ((Math.PI * 2) / 360) * 270, true);
   // bottom right corner
   context.moveTo(middleX + 60 * meter, middleY + 40 * meter);
   context.arc(middleX + 60 * meter, middleY + 40 * meter, 2.5 * meter, ((Math.PI * 2) / 360) * 270, ((Math.PI * 2) / 360) * 180, true);

   // draw left penalty box
   context.strokeRect(middleX - 60 * meter, middleY - 20.5 * meter, 18.5 * meter, 41 * meter);
   // draw right penalty box
   context.strokeRect(middleX + 41.5 * meter, middleY - 20.5 * meter, 18.5 * meter, 41 * meter);

   // draw left penalty spot
   context.moveTo(middleX - 48 * meter, middleY);
   context.arc(middleX - 48 * meter, middleY, 2, 0, Math.PI * 2);
   // draw right penalty spot
   context.moveTo(middleX + 48 * meter, middleY);
   context.arc(middleX + 48 * meter, middleY, 2, 0, Math.PI * 2);
   context.stroke();

   // draw left penalty arc
   context.moveTo(middleX - 48 * meter, middleY);
   context.beginPath();
   context.arc(middleX - 48 * meter, middleY, 10 * meter, ((Math.PI * 2) / 360) * 310, ((Math.PI * 2) / 360) * 50);
   context.stroke();
   // draw right penalty arc
   context.moveTo(middleX + 48 * meter, middleY);
   context.beginPath();
   context.arc(middleX + 48 * meter, middleY, 10 * meter, ((Math.PI * 2) / 360) * 130, ((Math.PI * 2) / 360) * 230);
   context.stroke();

   // draw left goal area
   context.strokeRect(middleX - 60 * meter, middleY - 10 * meter, 6.5 * meter, 20 * meter);
   // draw right goal area
   context.strokeRect(middleX + 53.5 * meter, middleY - 10 * meter, 6.5 * meter, 20 * meter);

   // draw goals (mirrored version)
   for (leftRight = 0; leftRight < 2; leftRight++) {
      leftRight === 0 ? (xOffset -= 4.2 * meter) : (xOffset += 124.2 * meter);
      context.lineWidth = 3;
      context.strokeRect(middleX + xOffset, middleY - 6 * meter, 4.2 * meter, 12 * meter);
      context.lineWidth = 0.5;
      for (i = 1; i < 4; i++) {
         context.strokeRect(middleX + xOffset + i * meshSizeX, middleY - 6 * meter, 1, 12 * meter);
      }
      for (j = 1; j < 14; j++) {
         context.strokeRect(middleX + xOffset, middleY - 6 * meter + j * meshSizeY, 4.3 * meter, 1);
      }
   }
};

drawSoccerField();
