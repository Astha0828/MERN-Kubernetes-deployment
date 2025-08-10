{{- define "mern-chart.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "mern-chart.fullname" -}}
{{- printf "%s" (include "mern-chart.name" .) -}}
{{- end -}}
