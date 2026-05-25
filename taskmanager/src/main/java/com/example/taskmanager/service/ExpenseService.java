package com.example.taskmanager.service;

import com.example.taskmanager.entity.Expense;

import java.util.List;

public interface ExpenseService {

    Expense createExpense(Expense expense);

    List<Expense> getAllExpenses();

    Expense updateExpense(Long id, Expense expense);

    void deleteExpense(Long id);
}