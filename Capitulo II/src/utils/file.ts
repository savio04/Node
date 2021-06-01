import fs from 'fs'

const deleFile = async (filename:string) => {
    try{
        //Verifica a existencia de um arquivo
        await fs.promises.stat(filename)

    }catch(err){
        return
    }

    //Remove o arquivo
    await fs.promises.unlink(filename)
}

export default deleFile