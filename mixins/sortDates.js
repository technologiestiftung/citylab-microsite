export default {
  methods: {
    sortDatesChronologically(dates) {
      return dates.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    },
    sortDatesReverseChronologically(dates) {
      return dates.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },
  },
};
