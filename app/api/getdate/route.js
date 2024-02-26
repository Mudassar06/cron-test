import { createClient } from "@supabase/supabase-js";

export async function GET(request){
    
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )

    const random = parseInt(Math.random()*100);    
    const currentdate = new Date(); 

    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    
    const { data } = await supabase
    .from('cron-test')
    .update({ temp: random})
    .eq('id', 1)
    console.log(data)
    
    return new Response(datetime)
}
