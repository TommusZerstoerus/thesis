import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.IntSize
import org.jetbrains.compose.resources.ExperimentalResourceApi
import org.jetbrains.compose.ui.tooling.preview.Preview
import kotlin.random.Random

@OptIn(ExperimentalResourceApi::class)
@Composable
@Preview
fun App() {
    var size by remember { mutableStateOf(IntSize.Zero) }

    MaterialTheme {
        Box(Modifier.fillMaxSize().onGloballyPositioned {
            size = it.size
        }) {
            repeat(1000) {
                var width = Random.nextFloat() * size.width
                var height = Random.nextFloat() * size.height
                Cube(width, height)
            }
        }
    }
}