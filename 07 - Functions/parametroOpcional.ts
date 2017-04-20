function disp_details(id: number, nome: string, email?: string) 
{
    console.log("ID:", id)
    console.log("Nome:", nome)
    if (email != undefined) 
    {
        console.log("Email:", email)
    }    
}

disp_details(123, "Priscyla");
disp_details(111,"Tonye", "tonye@email.com")