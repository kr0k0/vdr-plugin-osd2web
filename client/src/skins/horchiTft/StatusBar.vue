<template>
  <div class="statusbar flexrow align-items-center">
    <div class="osdbuttons flexitemgrow" id="buttons">
      <button v-for="(button,index) in buttons"
              @click="$root.sendKey(button.color)"
              :class="'but-' + button.color"
              class="btn ml-2 btn-primary"
              type="button">{{button.label}}</button>
    </div>
    <div class="sdatetxt flexitem">{{$root.formatDateLong(parseInt(new Date().getTime() / 1000, 10))}}</div>
    <div class="stimetxt flexitem">{{actualtime}}</div>
  </div>
</template>

<script>

export default {
    name: 'o2wStatusBar',
    data: function() {
        return  {
           now: parseInt(new Date().getTime() / 1000, 10),
           buttons: [],
           pageUp: false,
           pageDn: false
        };
    },
    created() {
        this.$root.$on("buttons", (data) => {
            this.buttons = [];
            for (let color in data)
                this.buttons.push({ 'color': color, label: data[color] });
        });
    },
    computed: {
        actualtime: function () {
            window.setTimeout(() => {
                this.now= parseInt(new Date().getTime() / 1000, 10);
            },1000);
            return this.$root.formatTimeLong(this.now);
        }
    }
}

</script>
