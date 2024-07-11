import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://buzfeinfhqnwhmeggspv.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1emZlaW5maHFud2htZWdnc3B2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDU1OTQyMCwiZXhwIjoyMDM2MTM1NDIwfQ.8fkn1FiaG80Rajjo5dWF3azz0mmdNVWJMRl79p02Oeg",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1emZlaW5maHFud2htZWdnc3B2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDU1OTQyMCwiZXhwIjoyMDM2MTM1NDIwfQ.8fkn1FiaG80Rajjo5dWF3azz0mmdNVWJMRl79p02Oeg"
    }
})