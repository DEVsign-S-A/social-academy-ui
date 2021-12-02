export const retornaDocumentos = (snapshot) =>{
    const documentos = [];

    snapshot.forEach(snapHijo =>{
        documentos.push({
            uid: snapHijo.uid,
            ...snapHijo.data()
        });
    });
    return documentos;
}
