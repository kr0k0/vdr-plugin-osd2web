<template>
  <div v-if="timers" class="list-group" id="actual-timer">
    <div v-for="(timer,n) in timers"
         class="mt-1 list-group-item card flex-column p-1 active"
         v-bind:class="{ timeron : timer.recording, timer : !timer.recording }">
      <div class="w-100 justify-content-between tmtxt">
        <div v-if="timer.epg2vdr" class="tlvdrtxt">[{{timer.epg2vdr.vdrname}}]</div>
        <div class="tltmtxt">{{formatDateTimeShortTo(timer.starttime, timer.stoptime)}}</div>
        <div v-if="timer.channel" class="tltmch">{{timer.channel.channelname}}</div>
        <div class="">{{timer.file}}</div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    name: 'o2wTimer',
    data: function () {
        return {
            timers: null,
            detail:-1
        };
    },
    methods: {
        formatDateTimeShortTo(unixTimeFrom, unixTimeTo) {
            if (!unixTimeFrom || !unixTimeTo || !global.Intl)
                return "";
            var dF = new Date(unixTimeFrom * 1000);
            var dT = new Date(unixTimeTo * 1000);
            return new Intl.DateTimeFormat('de-DE', {
                month: 'short',
                day: 'numeric'
            }).format(dF) + ' ' + new String(100 + dF.getHours()).slice(1) + ':' + new String(100 + dF.getMinutes()).slice(1)
                        + ' - ' + new String(100 + dT.getHours()).slice(1) + ':' + new String(100 + dT.getMinutes()).slice(1);
        }
    },
    created() {
        this.$root.$on("timers", (data) => {
            detail:-1;
            this.timers= data && data.length ? data: null;
            if (this.timers)
                this.timers.forEach((timer,index)=>{
                    timer.id= timer.id || index;
                })
        });
    },
    components: {
    }
}

/*
{
   "event":"timers",
   "object":[
      {
         "id":0,
         "remote":"",
         "recording":0,
         "pending":0,
         "invpsmargin":0,
         "day":1496613600,
         "file":"Liebe auf den dritten Blick",
         "aux":"<epgd><doneid>450487</doneid><template></template><namingmode>0</namingmode><source>webif</source><timerid>3784</timerid></epgd>",
         "expired":0,
         "starttime":1496677380,
         "stoptime":1496683500,
         "weekdays":0,
         "firstday":0,
         "flags":1,
         "channel":{
            "channelid":"S19.2E-1-1101-28106",
            "channelname":"Das Erste",
            "channelnumber":38,
            "provider":"ARD"
         },
         "event":{
            "eventid":3723521,
            "channelid":"S19.2E-1-1101-28106",
            "title":"Liebe auf den dritten Blick",
            "shorttext":"Komödie (D 2007)",
            "starttime":1496677500,
            "endtime":1496682900,
            "duration":5400,
            "runningstatus":0,
            "isrunning":0,
            "parentalrating":0,
            "vps":0,
            "hastimer":1,
            "seen":0,
            "epg2vdr":{
               "imagecount":"3",
               "scrmovieid":"342651",
               "numrating":"2",
               "year":"2007",
               "category":"Spielfilm",
               "country":"D",
               "txtrating":"Eher durchschnittlich",
               "genre":"Komödie",
               "rating":" / Spaß * / Spannung *",
               "shortreview":"Eine Weinprobe mit fadem Abgang",
               "director":"Helmut Metzger",
               "shortdescription":"TV-Komödie mit Katja Weitzenböck     ",
               "actor":"Katja Weitzenböck (Dianne Schönleber), Roland Koch (Anton Brück), Thure Riefenstein (Heiko Schönleber), Sabrina White (Viktoria), Dietrich Mattausch (Bartolo Berlinghieri), Andrea Eckert (Isabella Berlinghieri), Thamara Barth (Claudia)",
               "source":"TVSP",
               "longdescription":"Heimlich reist Dianne (Katja Weitzenböck) ihrem Gatten nach Italien hinterher – und findet ihren Verdacht bestätigt: Heiko hat eine andere! Zufallsbekanntschaft Anton (Roland Koch) hilft ihr aus dem Tal der Tränen, nimmt sie mit zu einem Geschäftsessen – und wer kreuzt dort auf? Richtig, Heiko mit \"Ehefrau\"...Mildes Bäumchen-Wechsel-Dich-Spiel voller Vino- und Pasta-Klischees. "
            },
            "description":"Genre: Komödie\r\nKategorie: Spielfilm\r\nLand: D\r\nJahr: 2007\r\n\r\nTV-Komödie mit Katja Weitzenböck     \r\n\r\nEher durchschnittlich, Eine Weinprobe mit fadem Abgang\r\n\r\n\r\n / Spaß * / Spannung *\r\n\r\nHeimlich reist Dianne (Katja Weitzenböck) ihrem Gatten nach Italien hinterher – und findet ihren Verdacht bestätigt: Heiko hat eine andere! Zufallsbekanntschaft Anton (Roland Koch) hilft ihr aus dem Tal der Tränen, nimmt sie mit zu einem Geschäftsessen – und wer kreuzt dort auf? Richtig, Heiko mit \"Ehefrau\"...Mildes Bäumchen-Wechsel-Dich-Spiel voller Vino- und Pasta-Klischees. \r\n\r\nDarsteller: Katja Weitzenböck (Dianne Schönleber), Roland Koch (Anton Brück), Thure Riefenstein (Heiko Schönleber), Sabrina White (Viktoria), Dietrich Mattausch (Bartolo Berlinghieri), Andrea Eckert (Isabella Berlinghieri), Thamara Barth (Claudia)\r\n\r\nRegie: Helmut Metzger\r\n\r\nQuelle: TVSP",
            "timermatch":"full"
         },
         "epg2vdr":{
            "id":3784,
            "vdrname":"keller",
            "vdruuid":"7F13E490-09B3-401C-B26C-8B7F2F111014",
            "vdrrunning":1,
            "local":1,
            "state":"P",
            "stateinfo":"",
            "action":"A"
         }
      }
   ]
}
*/
</script>
