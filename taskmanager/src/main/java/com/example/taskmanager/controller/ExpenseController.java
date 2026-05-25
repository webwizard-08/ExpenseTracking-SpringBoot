package com.example.taskmanager.controller;

import com.example.taskmanager.entity.Expense;
import com.example.taskmanager.service.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping
    public ResponseEntity<Expense> createExpense(
            @Valid @RequestBody Expense expense) {

        Expense createdExpense =
                expenseService.createExpense(expense);

        return new ResponseEntity<>(
                createdExpense,
                HttpStatus.CREATED
        );
    }

    @GetMapping
    public ResponseEntity<List<Expense>> getAllExpenses() {

        return ResponseEntity.ok(
                expenseService.getAllExpenses()
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<Expense> updateExpense(
            @PathVariable Long id,
            @Valid @RequestBody Expense expense) {

        return ResponseEntity.ok(
                expenseService.updateExpense(id, expense)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteExpense(
            @PathVariable Long id) {

        expenseService.deleteExpense(id);

        return ResponseEntity.ok(
                "Expense deleted successfully"
        );
    }
}