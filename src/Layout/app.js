import Modal from '../Components/Modal/index.vue';
import Permissions from '../Components/Permissions/index.vue';

export default {
  components: {
    'modal': Modal,
    'permissions': Permissions
  },
  data () {
    return {
      modalContentComp: 'log-in',
      showModal: true,
      permissions: ['Add User', 'Remove User(s)', 'Update Password'],
      showPermissions: false,
      isLoggedIn : false
    }
  },
  methods: {
    closeModal: function() {
      this.showModal = false;
      this.showPermissions = true;
      this.isLoggedIn = true;
    },
    updateModal: function(whichModal) {
      this.showModal = true;
      this.modalContentComp = whichModal;
    }
  },
  computed: {
    logInOut: function() {
      return this.isLoggedIn ? 'Log Out' : 'Log In';
    }
  }
}
