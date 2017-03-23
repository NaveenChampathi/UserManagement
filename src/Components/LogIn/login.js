import firebase from '../../FireBase/firebase.js';

export default {
  data() {
    return {
      userName: '',
      password: '',
      firebase: firebase
    }
  },
  methods:{
    signIn: function() {
      this.firebase.auth().signInWithEmailAndPassword(this.userName, this.password).then(res => {
        this.$emit('closeModal');
      }).catch(function(error){
        console.log('fasdfas');
      });
    }
  }
}
