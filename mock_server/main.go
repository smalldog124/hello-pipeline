package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	config := cors.New(
		cors.Config{
			AllowOrigins: []string{"http://localhost:4200"},
		},
	)
	r.Use(config)
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "สวัสดี ชาวโลก",
		})
	})
	r.Run(":3000")
}
