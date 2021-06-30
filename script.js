/*
###############################
## LAB - Canvas Soccer Field ##
############################### */

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

widthField = document.querySelector('canvas').width;
heightField = document.querySelector('canvas').height;

// ### Field size 80m / 120 m ###
meter = ((widthField / 14) * 12) / 120;

// ### Declaring center ###
middleX = widthField / 2;
middleY = heightField / 2;

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
      console.log('hello');
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
};

drawSoccerField();
