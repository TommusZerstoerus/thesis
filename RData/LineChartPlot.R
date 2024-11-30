library(ggplot2)

csv_file1000 <- "~/1000cubes.csv"
csv_file100 <- "~/100cubes.csv"
csv_file100android <- "~/100cubesAndroid.csv"
csv_file1000android <- "~/1000cubesAndroid.csv"

data1000 <- read.csv(csv_file1000, header = TRUE)
data100  <- read.csv(csv_file100, header = TRUE)
data100android <- read.csv(csv_file100android, header = TRUE)
data1000android <- read.csv(csv_file1000android, header = TRUE)

# Berechne den Mittelwert und Median für Flutter und React Native
mean_flutter_1000 <- mean(data1000$Flutter, na.rm = TRUE)
median_flutter_1000 <- median(data1000$Flutter, na.rm = TRUE)

mean_react_native_1000 <- mean(data1000$React_Native, na.rm = TRUE)
median_react_native_1000 <- median(data1000$React_Native, na.rm = TRUE)

mean_flutter_100 <- mean(data100$Flutter, na.rm = TRUE)
median_flutter_100 <- median(data100$Flutter, na.rm = TRUE)

mean_react_native_100 <- mean(data100$React_Native, na.rm = TRUE)
median_react_native_100 <- median(data100$React_Native, na.rm = TRUE)

mean_flutter_100android <- mean(data100android$Flutter, na.rm = TRUE)
median_flutter_100android <- median(data100android$Flutter, na.rm = TRUE)

mean_react_native_100android <- mean(data100android$React_Native, na.rm = TRUE)
median_react_native_100android <- median(data100android$React_Native, na.rm = TRUE)

mean_flutter_1000android <- mean(data1000android$Flutter, na.rm = TRUE)
median_flutter_1000android <- median(data1000android$Flutter, na.rm = TRUE)

mean_react_native_1000android <- mean(data1000android$React_Native, na.rm = TRUE)
median_react_native_1000android <- median(data1000android$React_Native, na.rm = TRUE)

# Plot für 1000 Cubes (Browser)
ggplot(data1000, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = `React_Native`, color = "React Native"), size = 1) +
  geom_point(aes(y = `React_Native`), color = "red", size = 2) +
  labs(title = paste("FPS over time Browser | 1000 Cubes | 1920x964 px",
                     "\nFlutter: Mean =", round(mean_flutter_1000, 2), 
                     "| Median =", round(median_flutter_1000, 2),
                     "\nReact Native: Mean =", round(mean_react_native_1000, 2), 
                     "| Median =", round(median_react_native_1000, 2)),
       x = "Time (s)",
       y = "FPS") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data1000$AxisLabel), by = 5)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))

# Plot für 100 Cubes (Browser)
ggplot(data100, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = `React_Native`, color = "React Native"), size = 1) +
  geom_point(aes(y = `React_Native`), color = "red", size = 2) +
  labs(title = paste("FPS over time Browser | 100 Cubes | 1920x964 px",
                     "\nFlutter: Mean =", round(mean_flutter_100, 2), 
                     "| Median =", round(median_flutter_100, 2),
                     "\nReact Native: Mean =", round(mean_react_native_100, 2), 
                     "| Median =", round(median_react_native_100, 2)),
       x = "Time (s)",
       y = "FPS") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data100$AxisLabel), by = 5)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))

# Plot für 100 Cubes (Android)
ggplot(data100android, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = `React_Native`, color = "React Native"), size = 1) +
  geom_point(aes(y = `React_Native`), color = "red", size = 2) +
  labs(title = paste("FPS over time Android | 100 Cubes | 1920x964 px",
                     "\nFlutter: Mean =", round(mean_flutter_100android, 2), 
                     "| Median =", round(median_flutter_100android, 2),
                     "\nReact Native: Mean =", round(mean_react_native_100android, 2), 
                     "| Median =", round(median_react_native_100android, 2)),
       x = "Time (s)",
       y = "FPS") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data100android$AxisLabel), by = 5)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))

# Plot für 1000 Cubes (Android)
ggplot(data1000android, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = `React_Native`, color = "React Native"), size = 1) +
  geom_point(aes(y = `React_Native`), color = "red", size = 2) +
  labs(title = paste("FPS over time Android | 1000 Cubes | 1920x964 px",
                     "\nFlutter: Mean =", round(mean_flutter_1000android, 2), 
                     "| Median =", round(median_flutter_1000android, 2),
                     "\nReact Native: Mean =", round(mean_react_native_1000android, 2), 
                     "| Median =", round(median_react_native_1000android, 2)),
       x = "Time (s)",
       y = "FPS") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data1000android$AxisLabel), by = 5)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))

