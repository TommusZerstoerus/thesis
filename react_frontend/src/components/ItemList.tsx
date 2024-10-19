import {FlatList, Text, View} from "react-native"
import {styles} from "../styles/styles"
import {fakerDE as faker} from '@faker-js/faker'
import {Profiler, useCallback, useMemo} from "react"

interface ItemListProps  {
    onRenderDone: () => void,
    listSize: number
}


export const ItemList = (props : ItemListProps) => {
    const data = useMemo(() => Array.from({ length: props.listSize }, (_, i) => ` ${i + 1} ${faker.hacker.phrase()}`), [])

    const renderItem = useCallback(({ item }: { item: string }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
    ), [])

    const onRender = () => {
        props.onRenderDone()
    }

    return (
        <Profiler id="test" onRender={onRender}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{width: '100%'}}
            />
        </Profiler>
    )
}