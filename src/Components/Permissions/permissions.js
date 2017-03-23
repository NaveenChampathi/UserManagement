export default {
  data () {
    return {}
  },
  props: ['permissions'],
  methods: {
    showModal: function(whichPerm) {
      switch(whichPerm) {
        case 'Add User':
          this.$emit('showModal', 'add-user');
        break;
        case 'Remove User(s)':
          this.$emit('showModal');
        break;
        case 'Update Password':
          this.$emit('showModal', 'update-password');
        break;
        default:
      }
    }
  }
}
