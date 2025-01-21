library(ggplot2)

setwd("C:/Git/thesis")

csv_file1000 <- "./Rdata/web/1000cubes.csv"
csv_file100 <- "./RData/web/100cubes.csv"
csv_file100android <- "./RData/android/100cubesAndroid.csv"
csv_file1000android <- "./RData/android/1000cubesAndroid.csv"

csv_prime <- "./RData/web/prime.csv"
csv_state <- "./RData/web/state.csv"
csv_storage <- "./RData/web/storage.csv"

csv_prime_android <- "./RData/android/prime.csv"
csv_state_android <- "./RData/android/state.csv"
csv_storage_android <- "./RData/android/storage.csv"

data_prime <- read.csv(csv_prime, header = TRUE)
data_state <- read.csv(csv_state, header = TRUE)
data_storage <- read.csv(csv_storage, header = TRUE)

data_prime_android <- read.csv(csv_prime_android, header = TRUE)
data_state_android <- read.csv(csv_state_android, header = TRUE)
data_storage_android <- read.csv(csv_storage_android, header = TRUE)

data1000 <- read.csv(csv_file1000, header = TRUE)
data100  <- read.csv(csv_file100, header = TRUE)
data100android <- read.csv(csv_file100android, header = TRUE)
data1000android <- read.csv(csv_file1000android, header = TRUE)

# Plot für 1000 Cubes (Browser)
ggplot(data1000, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = `React_Native`, color = "React Native"), size = 1) +
  geom_point(aes(y = `React_Native`), color = "red", size = 2) +
  labs(title = paste("FPS over time Browser | 1000 Cubes | 1920x964 px"),
       x = "Time (s)",
       y = "FPS") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data1000$AxisLabel), by = 5)) +
  scale_y_continuous(limits = c(0, NA)) +
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
  labs(title = paste("FPS over time Browser | 100 Cubes | 1920x964 px"),
       x = "Time (s)",
       y = "FPS") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data100$AxisLabel), by = 5)) +
  scale_y_continuous(limits = c(0, NA)) +
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
  labs(title = paste("FPS over time Android | 100 Cubes | 1920x964 px"),
       x = "Time (s)",
       y = "FPS") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data100android$AxisLabel), by = 5)) +
  scale_y_continuous(limits = c(0, NA)) +
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
  labs(title = paste("FPS over time Android | 1000 Cubes | 1920x964 px"),
       x = "Time (s)",
       y = "FPS") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data1000android$AxisLabel), by = 5)) +
  scale_y_continuous(limits = c(0, NA)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))

# Plot für Prime Daten
ggplot(data_prime, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = React_Native, color = "React Native"), size = 1) +
  geom_point(aes(y = React_Native), color = "red", size = 2) +
  labs(title = paste("Duration | Prime | Browser | n = 1.000.000"),
       x = "Run",
       y = "Time (ms)") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data_prime$AxisLabel), by = 5)) +
  scale_y_continuous(limits = c(0, NA)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))

# Plot für State Daten
ggplot(data_state, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = React_Native, color = "React Native"), size = 1) +
  geom_point(aes(y = React_Native), color = "red", size = 2) +
  labs(title = paste("Duration | State | Browser | n = 10.000"),
       x = "Run",
       y = "Time (ms)") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data_state$AxisLabel), by = 5)) +
  scale_y_continuous(limits = c(0, NA)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))


# Plot für Storage Daten
ggplot(data_storage, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = React_Native, color = "React Native"), size = 1) +
  geom_point(aes(y = React_Native), color = "red", size = 2) +
  labs(title = paste("Duration | Storage | Browser | n = 10.000 "),
       x = "Run",
       y = "Time (ms)") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_x_continuous(breaks = seq(0, max(data_storage$AxisLabel), by = 5)) +
  scale_y_continuous(limits = c(0, NA)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))

# Plot für Prime Daten (Android)
ggplot(data_prime_android, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = React_Native, color = "React Native"), size = 1) +
  geom_point(aes(y = React_Native), color = "red", size = 2) +
  labs(title = paste("Duration | Prime | Android | n = 1.000.000"),
       x = "Run",
       y = "Time (ms)") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_y_continuous(limits = c(0, NA)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))

# Plot für State Daten (Android)
ggplot(data_state_android, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = React_Native, color = "React Native"), size = 1) +
  geom_point(aes(y = React_Native), color = "red", size = 2) +
  labs(title = paste("Duration | State | Android | n = 10.000"),
       x = "Run",
       y = "Time (ms)") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_y_continuous(limits = c(0, NA)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))

# Plot für Storage Daten (Android)
ggplot(data_storage_android, aes(x = AxisLabel)) +
  geom_path(aes(y = Flutter, color = "Flutter"), size = 1) +
  geom_point(aes(y = Flutter), color = "blue", size = 2) +
  geom_path(aes(y = React_Native, color = "React Native"), size = 1) +
  geom_point(aes(y = React_Native), color = "red", size = 2) +
  labs(title = paste("Duration | Storage | Android | n = 10.000"),
       x = "Run",
       y = "Time (ms)") +
  scale_color_manual(name = "Framework", values = c("Flutter" = "blue", "React Native" = "red")) +
  scale_y_continuous(limits = c(0, NA)) +
  theme_minimal() +
  theme(plot.title = element_text(size = 14, face = "bold"),
        axis.title = element_text(size = 12),
        axis.text = element_text(size = 10),
        legend.title = element_text(size = 12),
        legend.text = element_text(size = 10))
