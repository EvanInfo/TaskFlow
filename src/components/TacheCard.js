import { View, Text, StyleSheet } from "react-native";
import { COULEURS } from "../styles/couleurs";

export default function TacheCard({titre, categorie, terminee}){
return(
    <View style={styles.carte}>
        <View style={styles.ligne}>
        <Text style={styles.titre}>{titre}</Text>
        <View style={styles.categorie}>
            <Text style={styles.categorieTexte}>{categorie}</Text>
        </View>
        </View>

        <Text style={[styles.statut, { color: terminee ? COULEURS.succes : COULEURS.muted }]}>
            {terminee ? '✓ Terminée' : '○ À faire'}
        </Text>
    </View>
)}

const styles = StyleSheet.create({
    titre:{
        flex: 1,
        fontWeight : 'bold',
        color: COULEURS.title
    },
    ligne :{
        flexDirection : 'row',
        justifyContent: 'space-between',
        gap: 5
    },
    carte : {
        backgroundColor : COULEURS.primaire,
        borderRadius : 10,
        padding: 12,
        gap: 5
    },
    categorie:{
        backgroundColor: COULEURS.accent,
        borderRadius: 10,
        paddingHorizontal : 6,
        paddingVertical: 2
    },
    categorieTexte : {
        color : COULEURS.texte,
        fontWeight:'800'
    },
    statut : {
        fontSize : 10
    }
})