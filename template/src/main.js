import 'es6-shim'
import 'es6-promise/auto'
import config from '@/config/'
import Init from '@/init.js'

Init
  .setConfig(config)
  .configureVue()
  {{#if_or isAuth isVuexStore}}
  .addStore()
  {{/if_or}}
  {{#isLiteKit}}
  .addVueLiteKit()
  {{/isLiteKit}}
  {{#if_or isSmartForm isVuelidate}}
  .addVuelidate()
  {{/if_or}}
  {{#isSmartForm}}
  .addVueSmartForm()
  {{/isSmartForm}}
  .addVueMeta()
  .addRouter()
  .addApiPlugin()
  {{#isAuth}}
  .addVueAuthService()
  {{/isAuth}}
  .run()
