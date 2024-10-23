library(ggplot2)

csv_file1000 <- "~/1000cubes.csv"
csv_file100 <- "~/100cubes.csv"
csv_file100android <- "~/100cubesAndroid.csv"
csv_file1000android <- "~/1000cubesAndroid.csv"

data1000 <- read.csv(csv_file1000, header = TRUE)
data100  <- read.csv(csv_file100, header = TRUE)
data100android <- read.csv(csv_file100android, header = TRUE)
data1000android <- read.csv(csv_file1000android, header = TRUE)

ggplot(data1000, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = `React_Native`, color = "React Native"), size = 1) +
  geom_point(aes(y = `React_Native`), color = "red", size = 2) +
  labs(title = "FPS over time Browser | 1000 Cubes | 1920x964 px",
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

ggplot(data100, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = `React_Native`, color = "React Native"), size = 1) +
  geom_point(aes(y = `React_Native`), color = "red", size = 2) +
  labs(title = "FPS over time Browser | 100 Cubes | 1920x964 px",
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

ggplot(data100android, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = `React_Native`, color = "React Native"), size = 1) +
  geom_point(aes(y = `React_Native`), color = "red", size = 2) +
  labs(title = "FPS over time Android | 100 Cubes | 1920x964 px",
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

ggplot(data1000android, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = `React_Native`, color = "React Native"), size = 1) +
  geom_point(aes(y = `React_Native`), color = "red", size = 2) +
  labs(title = "FPS over time Android | 1000 Cubes | 1920x964 px",
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

