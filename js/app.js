new Vue({
    el: '#vue-el',
    data: {
        health: 100,
        damage: 0,
        ended: false,
        almostDead: false,
        almostDeadCrit: false,
        close: false,
        closeCrit: false,
        hurts: false,
        hurtsCrit: false,
        fine: true,
        fineCrit: false,
        damageDegree: 280,
        crit: false,
        damageDealt: 0,
        numberOfDoomGuys: 0
    },
    methods: {
        hit: function () {
            this.damageDealt = Math.floor((Math.random() * (11 - 4)) + 4);
            if(this.damageDealt == 10) {
                this.crit = true;
            }
            else {
                this.crit = false;
            }
            this.damage += this.damageDealt;
            this.health -= this.damageDealt;
            if (this.health <= 0) {
                this.health = 0;
                this.damage = 100;
                this.almostDead = false;
                this.ended = true;
                this.numberOfDoomGuys++;
            }
            else if (this.health <= 35) {
                this.damageDegree = 155;
                document.getElementById("health-bar-color").style.filter = "hue-rotate(" + this.damageDegree + "deg) saturate(150%)";
                this.close = false;
                this.almostDead = true;
                if(this.crit == true) {
                    this.almostDead = false;
                    this.almostDeadCrit = true;
                }
                else {
                    this.almostDeadCrit = false;
                    this.almostDead = true;
                }
            }
            else if (this.health <= 55){
                this.damageDegree = 200;
                document.getElementById("health-bar-color").style.filter = "hue-rotate(" + this.damageDegree + "deg) saturate(150%)";
                this.hurts = false;
                this.close = true;
                if(this.crit == true) {
                    this.close = false;
                    this.closeCrit = true;
                }
                else {
                    this.closeCrit = false;
                    this.close = true;
                }
            }
            else if (this.health <= 75) {
                this.damageDegree = 220;
                this.fine = false;
                this.hurts = true;
                document.getElementById("health-bar-color").style.filter = "hue-rotate(" + this.damageDegree + "deg) saturate(150%)";
                if(this.crit == true) {
                    this.hurts = false;
                    this.hurtsCrit = true;
                }
                else {
                    this.hurtsCrit = false;
                    this.hurts = true;
                }
            }
            else {
                if(this.crit == true) {
                    this.fine = false;
                    this.fineCrit = true;
                }
                else {
                    this.fineCrit = false;
                    this.fine = true;
                }
            }
        },
        restart: function () {
            this.health = 100;
            this.damage = 0;
            this.ended = false;
            this.almostDead = false;
            this.almostDeadCrit = false;
            this.close = false;
            this.closeCrit = false;
            this.hurtsCrit = false;
            this.hurts = false;
            this.fineCrit = false;
            this.fine = true;
            this.damageDegree = 280;
            this.damageDealt = 0;
            this.crit = false;
            document.getElementById("health-bar-color").style.filter = "hue-rotate("+ this.damageDegree + "deg) saturate(150%)";
        }
    },
    computed: {
        
    },
})