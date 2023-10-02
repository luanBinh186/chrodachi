
const Helper = {
    formatDuration(d: any) {
        if (d < 0) {
            return "?";
        }
        let divisor = d < 3600000 ? [60000, 1000] : [3600000, 60000];
        function pad(x: any) {
            return x < 10 ? "0" + x : x;
        }
        return Math.floor(d / divisor[0]) + ":" + pad(Math.floor((d % divisor[0]) / divisor[1]));
    }
}

export default Helper

