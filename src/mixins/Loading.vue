<script>
export default {
    name: "Loading",
    data() {
        return {
            isLoading: true,
        }
    },
    methods: {
        hideLoading() {
            setTimeout(() => {
                this.isLoading = false;
            }, 100);
        },
        showLoading() {
            this.isLoading = true;
        },
    },
    ionViewDidEnter() {
        this.isLoading = true;
    },
}
</script>