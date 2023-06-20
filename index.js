import ngrok from 'ngrok'
import util from 'util'
import { exec } from "child_process"
const execOmammand = util.promisify(exec);
 // addr:'https://supabase-stripe-saas-psi.vercel.app',
(async ()=> {
    const { stdout, stderr } = await execOmammand('npx ngrok http https://supabase-stripe-saas-psi.vercel.app');
    console.log(stdout,stderr)
    // exec("npx ngrok http https://supabase-stripe-saas-psi.vercel.app", (error, stdout, stderr) => {
    //     if (error) {
    //         console.log(`error: ${error.message}`);
    //         return;
    //     }
    //     if (stderr) {
    //         console.log(`stderr: ${stderr}`);
    //         return;
    //     }
    //     console.log(`stdout: ${stdout}`);
    // });
//   const url = await ngrok.connect({
//     // addr: 8080,
//     //  proto:  'https://supabase-stripe-saas-psi.vercel.app',
//     authtoken: '2RR5z0cbxndrL3UVYDk5rzCBeaU_UjTG4tN4KLRtwy6jXBVS',
//     // subdomain: 'https://supabase-stripe-saas-psi.vercel.app'
//   });
  
//   const api = ngrok.getApi();
//   const tunnels = await api.listTunnels();
//   const apiUrl = await ngrok.getUrl();
//   const c = await tunnels.tunnels[0].config
//   c.addr = 'https://supabase-stripe-saas-psi.vercel.app'
//   console.log('apiUrl',apiUrl)
//   console.log('url',url)
//   console.log('turnel',util.inspect(tunnels,{showHidden: false, depth: null, colors: true}))
})();