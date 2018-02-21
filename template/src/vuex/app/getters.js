export default {
  {{#isAuth}}
  userData: state => state.userData
  {{/isAuth}}
}
