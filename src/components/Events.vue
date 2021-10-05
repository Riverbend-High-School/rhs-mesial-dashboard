<template>
  <div class="root" v-if="!loading">
    <agile
      :navButtons="false"
      :dots="false"
      :autoplay="true"
      :autoplaySpeed="10000"
    >
      <!-- TODO: Figure out overflow events (> 5) -->
      <div v-if="events.today.length" id="today" class="events_container">
        <h2>Today:</h2>
        <div class="event" v-for="(event, index) in events.today" :key="index">
          <div class="inner_event">
            <p class="time" v-if="!event.all_day">
              {{ dateFormat(event.start, "h:MM") }}
              <span class="am_pm">{{ dateFormat(event.start, "TT") }}</span> -
              {{ dateFormat(event.end, "h:MM") }}
              <span class="am_pm">{{ dateFormat(event.end, "TT") }}</span>
            </p>
            <p class="allday" v-else>All Day</p>
            <h2>{{ event.summary }}</h2>
          </div>
        </div>
      </div>
      <div v-if="events.tomorrow.length" id="tomorrow" class="events_container">
        <h2>Tomorrow:</h2>
        <div
          class="event"
          v-for="(event, index) in events.tomorrow"
          :key="index"
        >
          <div class="inner_event">
            <p class="time" v-if="!event.all_day">
              {{ dateFormat(event.start, "h:MM") }}
              <span class="am_pm">{{ dateFormat(event.start, "TT") }}</span> -
              {{ dateFormat(event.end, "h:MM") }}
              <span class="am_pm">{{ dateFormat(event.end, "TT") }}</span>
            </p>
            <p class="allday" v-else>All Day</p>
            <h2>{{ event.summary }}</h2>
          </div>
        </div>
      </div>
      <div v-if="events.week.length" id="week" class="events_container">
        <h2>This Week:</h2>
        <div class="event" v-for="(event, index) in events.week" :key="index">
          <div class="inner_event">
            <p class="time" v-if="!event.all_day">
              {{ dateFormat(event.start, "h:MM") }}
              <span class="am_pm">{{ dateFormat(event.start, "TT") }}</span> -
              {{ dateFormat(event.end, "h:MM") }}
              <span class="am_pm">{{ dateFormat(event.end, "TT") }}</span>
            </p>
            <div class="allday_text" v-else>
              <p class="allday">All Day</p>
              <p class="am_pm">{{ dateFormat(event.start, "dddd, mmmm dS") }}</p>
            </div>
            <h2>{{ event.summary }}</h2>
          </div>
        </div>
      </div>
      <div v-if="events.later.length" id="later" class="events_container">
        <h2>Later:</h2>
        <div class="event" v-for="(event, index) in events.later" :key="index">
          <div class="inner_event">
            <p class="time" v-if="!event.all_day">
              {{ dateFormat(event.start, "h:MM") }}
              <span class="am_pm">{{ dateFormat(event.start, "TT") }}</span> -
              {{ dateFormat(event.end, "h:MM") }}
              <span class="am_pm">{{ dateFormat(event.end, "TT") }}</span>
            </p>
            <div class="allday_text" v-else>
              <p class="allday">All Day</p>
              <p class="am_pm">{{ dateFormat(event.start, "dddd, mmmm dS") }}</p>
            </div>
            <h2>{{ event.summary }}</h2>
          </div>
        </div>
      </div>
    </agile>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>

<script>
import axiosInstance from "../helpers/axiosInstance.ts";
import dateFormat from "dateformat";
import { VueAgile } from "vue-agile";

export default {
  name: "Events",
  components: {
    agile: VueAgile,
  },
  data() {
    return {
      events: [],
      count_interval: null,
      loading: true,
      dateFormat,
    };
  },
  mounted: function() {
    this.loading = true;
    this.getEvents();
    this.count_interval = setInterval(() => {
      this.getEvents();
    }, 60000);
  },
  methods: {
    getEvents() {
      axiosInstance
        .get("/dashboard/events/")
        .then((response) => {
          this.events = response.data;
          this.loading = false;
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root {
  height: 75vh;
}

h1 {
  font-size: 30px;
  margin: 0px 8px 0px 16px;
}

.events_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 65vh;
  /* text-align: center; */
}

.inner_event {
  padding: 10px;
  margin: auto;
}

.event {
  background: rgba(0, 0, 0, 0.55);
  width: 80%;
  border-radius: 4px;
  margin: 10px 0px 0px 0px;
  max-height: 120px;
}

.time {
  font-size: 25px;
  margin: 0px 0px 4px 0px;
}

.am_pm {
  color: gray;
}

.allday {
  font-size: 25px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  border-radius: 5px;
  width: max-content;
  padding: 0px 4px 0px 2px;
  margin: 0px 0px 4px 0px;
}

.allday_text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h2 {
  font-size: 30px;
  overflow: hidden;
  white-space: nowrap; /* Don't forget this one */
  text-overflow: ellipsis;
}
</style>

<style>
.agile {
  width: 100%;
}

.agile__slides {
  height: 75vh;
}
</style>
