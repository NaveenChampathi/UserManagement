import firebase from '../../FireBase/firebase.js';
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userName: '',
      isAdmin: '',
      firebase: firebase
    }
  },
  methods: {
    createUser: function() {
      this.firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res => {
        this.firebase.database().ref('User/' + this.userName).set({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          userName: this.userName,
          permissions: this.isAdmin === 'yes' ? ['Add User', 'Remove User(s)', 'Update Password'] : ['Update Password'],
          isAdmin: this.isAdmin
        });
        this.$emit('closeModal');
      });
    }
  }
}
