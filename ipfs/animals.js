

const AnimalChoices = {
  COW: [
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241447707_362771528874610_2591930683245878997_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=47N4UKivBpcAX8-_H6k&tn=Hix1CUouOBL005QI&_nc_ht=scontent-lga3-1.xx&oh=012cb0b855e4be959c1f29835cdc02e3&oe=61624E30",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241564342_4326556557398462_3378763823354158372_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=b2LW2mEznScAX_Lba6N&_nc_ht=scontent-lga3-1.xx&oh=a76a80d0568e505fd6f706789fa1228f&oe=61625221",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241665831_439447537442120_3621203194755887540_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=nkRus4RjEBsAX-1fjmU&_nc_ht=scontent-lga3-1.xx&oh=5b3d8865c9d4f8d3ba8121ff1363f6e7&oe=6163C506",
  ],

  SHEEP: [
      "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241690533_1003220863795266_8271910434749034282_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=UV_wQ7PhzB4AX9fyz20&_nc_ht=scontent-lga3-1.xx&oh=54b067011102dd30ac829e7fb38d3d3d&oe=6161D516",
      "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241689313_142109654777210_5777992522265187336_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=yw7cz_FCGY0AX_q8kKr&_nc_ht=scontent-lga3-1.xx&oh=bf898f00c18b232df5bc056cff488bb4&oe=6164211C",
      "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241711781_663636207955681_1006970856041379511_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=zd8_S1mGTrMAX9CI6-0&tn=Hix1CUouOBL005QI&_nc_ht=scontent-lga3-1.xx&oh=e4b3a4992ac31e95cf059c975577e01d&oe=61638FE3",
  ],

  PIG: [
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/p1080x2048/240944543_467772620940111_4792597136093662412_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=xO1e9I7qHDkAX_f70gA&_nc_ht=scontent-lga3-1.xx&oh=22bd57df1444b9751763da409002d1bb&oe=616493AF",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/241047904_405940420947191_8648062366027737953_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=tg_DP2NOYzIAX_Q7QmL&_nc_ht=scontent-lga3-1.xx&oh=4f21b9aab788fcf6fc847c41288464c8&oe=61651CEE",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/240428586_2043476059153409_3902853538185530396_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=9r58Kl9FDyMAX9KEuGP&_nc_ht=scontent-lga3-1.xx&oh=2f20c9b27d586fd6bad9c5607dd0ce3b&oe=616510B8",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241307048_252120786770470_5155480472462122231_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DCTJ7jsOcfUAX9xLvFO&_nc_ht=scontent-lga3-1.xx&oh=b91115d00f8c7de0143d769124093e02&oe=616485AE",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241206092_904272136837979_1293577482501132733_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ZKzUdYQVvKoAX_ywCTE&_nc_ht=scontent-lga3-1.xx&oh=511eb5ca3fbc3e925fb20209d14b8299&oe=6161CF12",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241197779_619921509395240_5940478913833885923_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=hwY0_Ses9J8AX89TlbY&_nc_ht=scontent-lga3-1.xx&oh=310fbd2e058dba027b17d5fb258b64a7&oe=6162FA50",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241551526_181938594042481_9065630236837124885_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=tg4KpNu16voAX_fezaM&_nc_ht=scontent-lga3-1.xx&oh=c0771515adb713d707378fb83905d9a9&oe=616460C2",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241459959_580406760070529_2061553451390816486_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=i1QtglvQopYAX_hoKo1&_nc_ht=scontent-lga3-1.xx&oh=19067ca11185ac2d1a355dfeb9df7ee0&oe=6163B490",
  ],
  CHICK: [
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241679210_560595365279003_8483246555950474144_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=e2yJGjPpvrcAX8KM2Pm&_nc_ht=scontent-lga3-1.xx&oh=7d5c6a1c1c4764fa8e302776c85a3ab1&oe=61643436",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241495596_445863566669466_6303360660291666280_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Lmg3VAZQ220AX_eO_cm&_nc_ht=scontent-lga3-1.xx&oh=8c2431da3e6abad95196cb5425aac04c&oe=61621E9A",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241696779_459464205120313_3708795747367534188_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=xDrHPQV-Hy4AX-UNnEf&_nc_ht=scontent-lga3-1.xx&oh=4439e1858a679f7008b6a546d6efc97c&oe=61628C2A",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/241678048_245813700803618_7265474792268372906_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=udM22duEqn4AX-Bcb0q&_nc_ht=scontent-lga3-1.xx&oh=85fdf52ce027488f3dcd75cce92461b3&oe=61649B96",
  ]

}

function serveAnimal() {
    const i = Math.floor(Math.random() * 4);

    switch(i) {

      case 0:
      const cowChoice = Math.floor(Math.random() * 3);
        return({
          url: AnimalChoices.COW[cowChoice],
          name: "Cow",
          description: "Gentle giant"
        });
        break;

      case 1:
      const sheepChoice = Math.floor(Math.random() * 3);
        return({
          url: AnimalChoices.SHEEP[sheepChoice],
          name: "Sheep",
          description: "Fluffy"
        });
        break;

      case 2:
      const pigChoice = Math.floor(Math.random() * 8);
        return({
          url: AnimalChoices.PIG[pigChoice],
          name: "Pig",
          description: "Surprisingly cute"
        });
        break;

      case 3:
      const chickChoice = Math.floor(Math.random() * 4);
        return({
          url: AnimalChoices.CHICK[chickChoice],
          name: "Chick",
          description: "NOT CANDY"
        });
        break;
    }
}

//serveAnimal();

module.exports = {serveAnimal};
//export {serveAnimal};
